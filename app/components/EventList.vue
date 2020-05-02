<template>
  <StackLayout>
    <Button text="Tap me!" @tap="refresh"></Button>
    <Label class="message" :text="eventCount" />
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
      }
    },
    computed: {
      ...mapGetters({
        getEvents: 'getEvents',
      }),
      eventCount() {
        return this.getEvents.length;
      }
    }
  }
</script>