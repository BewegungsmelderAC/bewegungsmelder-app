<template>
  <ActionBar :title="title">
    <ActionItem @tap="goTo('/search')"
                ios.systemIcon="12" ios.position="right"
                android.systemIcon="ic_menu_search" android.position="actionBar"
                 />
    <ActionItem @tap="goTo('/options')" v-show="isOptions"
                ios.systemIcon="2" ios.position="right"
                android.systemIcon="ic_menu_more" android.position="actionBar"
                 />
    <ActionItem @tap="goTo('/options')" v-show="!isOptions"
                ios.systemIcon="14" ios.position="right"
                android.systemIcon="ic_menu_back" android.position="actionBar"
                 />
    <!-- <GridLayout columns="*, auto" rows="auto">
      <Label :text="getInfo" col="0" row="0" />
      <Button class="nav-btn" text='Search' @tap="goTo('/search')" row="0" col="1" />
    </GridLayout> -->
  </ActionBar>
</template>

<script >
  // Necessary if the component requests data from Vuex Store
  // import { mapGetters } from 'vuex'

  export default {
    name: "defaultActionBar",
    props: ['text'],
    data() {
      return {
        // Component data which are not part of the Vuex Store, ie. local data, go here
        msg: 'DefaultActionBar',
        title: this.text
      }
    },
    components: {
    },
    computed: {
      // MapGetters to get Data from Vuex Store
      // ...mapGetters({
      //   getEvents: "getEvents"
      // }),
    },
    methods: {
      goTo(name) {
        this.$navigator.navigate(name);
      },
      isOptions() {
        return this.$navigator.path === "/options"
      }
    }
  }
</script>