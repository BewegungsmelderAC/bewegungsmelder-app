<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <GridLayout columns="*" rows="50, 50, *">
            <Label class="message" :text="msg" col="0" row="0"/>
            <Label class="message" :text="event" col="0" row="1"/>
            <EventList col="0" row="2"></EventList>
        </GridLayout>

    </Page>
</template>

<script >
  import EventList from "./EventList"

  export default {
    data() {
      return {
        msg: 'App'
      }
    },
    components: {
      EventList
    },
    computed: {
      event() {
        // return this.$store.state.events[0];
        return this.$store.state.events.length;
      }
    },
    methods: {
      refresh() {
        console.log('Fetching! :)');
        this.$store.dispatch('fetchEvents');
      }
    }
  }
</script>

<!-- alternatively <style scoped> for local style -->
<style>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
