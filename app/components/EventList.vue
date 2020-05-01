<template>
  <StackLayout>
    <Button text="Tap me!" @tap="refresh"></Button>
    <Label class="message" :text="txt" />
    <Label class="message" :text="eventCount" />
  </StackLayout>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        txt: 'lel'
      };
    },
    methods: {
      refresh() {
        console.log('Fetching! :)');
        this.$store.dispatch('fetchEvents');
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