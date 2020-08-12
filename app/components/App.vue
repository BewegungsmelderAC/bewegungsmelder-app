<template>
    <Page>
        <ActionBar title="Bewegungsmelder-App" />
        <StackLayout>
        </StackLayout>
    </Page>
</template>

<script >
  import { mapGetters } from 'vuex'

  import EventList from "./EventList"
  import ComponentTemplate from "./ComponentTemplate"
  //import BottomNavigation from "./BottomNavigation"

  export default {
    data() {
      return {
        // msg: 'App'
      }
    },
    components: {
      EventList,
      ComponentTemplate,
      //BottomNavigation
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
