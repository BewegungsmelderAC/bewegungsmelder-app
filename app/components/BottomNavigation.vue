<template>
  <StackLayout>
    <!-- <GridLayout columns="*, *, *, *" rows="auto" v-show="hidden" >
      <Button class="nav-btn" text='Home' @tap="goTo('/home')" row="1" col="0" />
      <Button class="nav-btn" text='Termine' @tap="goTo('/calendar')" row="1" col="1" />
      <Button class="nav-btn" text='Gruppen' @tap="goTo('/groups')" row="1" col="2" />
      <Button class="nav-btn" text='Support' @tap="goTo('/support')" row="1" col="3" />
    </GridLayout> -->
    <SegmentedBar v-show="hidden" v-model="selectedIndex" @selectedIndexChange="indexChange" >
      <SegmentedBarItem title="Home" />
      <SegmentedBarItem title="Termine" />
      <SegmentedBarItem title="Gruppen" />
      <SegmentedBarItem title="Support" />
    </SegmentedBar>
  </StackLayout>
</template>

<script >
  // Necessary if the component requests data from Vuex Store
  // import { mapGetters } from 'vuex'

  import routes from "../routes";

  export default {
    data() {
      return {
        // Component data which are not part of the Vuex Store, ie. local data, go here
        hiddenArr: [
          // stores the components in which the bottom navigation will not be shown
          '/search',
          '/options',
        ],
        selectedIndex: 0,
      }
    },
    components: {

    },
    computed: {
      // MapGetters to get Data from Vuex Store
      // ...mapGetters({
      //   getEvents: "getEvents"
      // }),
      hidden() {
        return !this.hiddenArr.includes(this.$navigator.path);
      }
    },
    methods: {
      indexChange() {
        switch(this.selectedIndex) {
          case 0:
            this.$navigator.navigate('/home');
            break;
          case 1:
            this.$navigator.navigate('/calendar');
            break;
          case 2:
            this.$navigator.navigate('/groups');
            break;
          case 3:
            this.$navigator.navigate('/support');
            break;
          default:
            this.$navigator.navigate('/home');
        }
      },
    }
  }
</script>

<style scoped>

  .nav-btn {
    color: white;
    display: block;
    width: 100%;
    border: none;
    background-color: #53ba82;
    padding: 14px 28px;
    font-size: 16px;
    text-align: center;
    float: left;
  }

  /* .nav-btn {
    background-color: #FFC4D1;
    margin: 20;
    padding: 10;
    border-radius: 10;
    font-size: 30;
  }

  Button {
    background-color: rgba(255, 0, 0, 0.0);
    border-color: rgba(255, 0, 0, 0.0);
    border-width: 1;
  } */

</style>