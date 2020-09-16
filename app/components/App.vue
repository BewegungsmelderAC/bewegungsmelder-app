<template>
  <GridLayout class="App" rows="*, auto" >
    <ContentView row="0">
      <Navigator defaultRoute='/home' />
    </ContentView>
    <BottomNavigation row="1" />
  </GridLayout>
</template>

<script >
  import { mapGetters } from 'vuex'

  import EventList from "./EventList"
  import ComponentTemplate from "./ComponentTemplate"
  import BottomNavigation from "./BottomNavigation"

  export default {
    data() {
      return {
        msg: 'App',
        colorString: "#FF0075",
      }
    },
    components: {
      EventList,
      ComponentTemplate,
      BottomNavigation
    },
    computed: {
      // ...mapGetters({
      //   getColors: "getColors"
      // }),
      // getMainColor() {
      //   console.log(getColors)
      //   return rgb(getColors[2])
      // }
    },
    methods: {
    }
  }

</script>

<!-- alternatively <style scoped> for local style -->
<style>


    ActionBar {
        background-color: #ff00ff;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }


</style>
