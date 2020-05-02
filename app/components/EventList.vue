<template>
  <StackLayout>
    <Button text="Refresh!" @tap="refresh"></Button>
    <Label class="message" :text="eventCount" />
    <RadListView ref="getEvents" for="event in getEvents" @itemTap="onEventTap">
      <v-template>
        <StackLayout>
          <Label v-if="event" :text="event.name" class="nameLabel"></Label>
        </StackLayout>
      </v-template>
    </RadListView>
  </StackLayout>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {

      };
    },
    methods: {
      refresh() {
        this.$store.dispatch('fetchEvents', {url: "https://bm-ac.ml/api/event"});
      },
      onEventTap() {

      }
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