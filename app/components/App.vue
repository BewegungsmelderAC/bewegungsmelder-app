<template>
    <Page>
        <ActionBar title="Bewegungsmelder-App"/>
        <StackLayout >
            <EventList></EventList>

        </StackLayout>

    </Page>
</template>

<script >
  import { mapGetters } from 'vuex'

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
    },
    methods: {
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
