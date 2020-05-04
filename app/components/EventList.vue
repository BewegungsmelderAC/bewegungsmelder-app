<template>
  <StackLayout>
    <Button text="Refresh!" @tap="refresh"></Button>
    <Label class="message" :text="eventCount" />

    <RadListView
              v-if="getEvents" 
              layout="linear"
              for="event in getEvents"
              pullToRefresh="true"
              @itemTap="onEventTap"
              @pullToRefreshInitiated="onPullToRefreshInitiated"
              @scrolled="onScrolled"><!-- maybe define item height for ios -->

      <v-template class="event">
        <GridLayout columns="*" v-bind:rows="cardHeight">
          <!-- We don't have to use cardviews -->
          <card-view if="event.name" margin="10" elevation="40" radius="1">
            <GridLayout columns="75, *" rows="auto, *">
              <Image if="event.thumbnail" v-bind:src="event.thumbnail" stretch="none" row="0" col="0" rowspan="2" />
              <Label if="!event.thumbnail" :text="noPictureText" row="0" col="0" rowspan="2"></Label>
              <Label :text="event.name" row="0" col="1"></Label>
            </GridLayout>
          </card-view>
        </GridLayout>
      </v-template>

    </RadListView>

  </StackLayout>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        page: 1,
        scrollOffset: 0,
        scrollTrigger: 50, // number of cards left unread until new data are loaded
        cardHeight: 70,
        perPage: 100,
        noPictureText: "Bild",
      };
    },
    methods: {
      refresh() {
        this.page = 1;
        this.$store.dispatch('clearEvents');
        this.$store.dispatch('fetchEvents', {url: `https://bm-ac.ml/api/event?page=1&per_page=${this.perPage}`});
      },
      onScrolled ({ scrollOffset }) {
        this.scrollOffset = scrollOffset;
        // Calculate list height and substract unread cards
        let triggerHeight = (this.page * this.perPage * this.cardHeight) - (this.scrollTrigger * this.cardHeight);
        if(this.scrollOffset > triggerHeight) {
          this.page++;
          this.$store.dispatch('fetchEvents', {url: `https://bm-ac.ml/api/event?page=${this.page}&per_page=${this.perPage}`});
        }
      },
      onEventTap({ item }) {
        console.log(item);
      },
      onPullToRefreshInitiated ({ object }) {
        this.refresh();

        // in order to avoid race conditions (only on iOS),
        // in which the UI may not be completely updated here
        // we use this.$nextTick call:
        this.$nextTick(() => {
          object.notifyPullToRefreshFinished();
        });
      },
    },
    computed: {
      ...mapGetters({
        getEvents: 'getEvents',
      }),
      eventCount() {
        return this.getEvents.length;
      },
      showList() {
        return (eventCount() != 0);
      }
    }
  }
</script>