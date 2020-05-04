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
            <Stack-layout>
              <Label :text="event.name" class="nameLabel"></Label>
            </Stack-layout>
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
        scrollTrigger: 25, // number of cards left unread until new data are loaded
        cardHeight: 100,
        perPage: 50,
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
          console.log("triggered.");
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