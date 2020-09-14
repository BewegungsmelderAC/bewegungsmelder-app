<template>
  <GridLayout columns="*, *, *, *" rows="auto" v-show="hidden" >
    <Button class="nav-btn" text='Home' @tap="goTo('/home')" row="1" col="0" />
    <Button class="nav-btn" text='Calendar' @tap="goTo('/calendar')" row="1" col="1" />
    <Button class="nav-btn" text='Gruppen' @tap="goTo('/groups')" row="1" col="2" />
    <Button class="nav-btn" text='Support' @tap="goTo('/support')" row="1" col="3" />
  </GridLayout>
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
          '/search',
        ]
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
      goTo(name) {
        this.$navigator.navigate(name);
      }
    }
  }
</script>