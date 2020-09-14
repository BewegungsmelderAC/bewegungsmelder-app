<template>
  <ActionBar title="asdf">
    <GridLayout columns="*, auto" rows="auto">
      <Label :text="getInfo" col="0" row="0" />
      <Button class="nav-btn" text='Search' @tap="goTo('/search')" row="0" col="1" />
    </GridLayout>
  </ActionBar>
</template>

<script >
  // Necessary if the component requests data from Vuex Store
  // import { mapGetters } from 'vuex'

  export default {
    name: "defaultActionBar",
    data() {
      return {
        // Component data which are not part of the Vuex Store, ie. local data, go here
        msg: 'DefaultActionBar'
      }
    },
    components: {
    },
    computed: {
      // MapGetters to get Data from Vuex Store
      // ...mapGetters({
      //   getEvents: "getEvents"
      // }),
      getInfo() {
        console.log(this.$navigator.path)
        return this.$navigator.path;
      }
    },
    methods: {
      goTo(name) {
        this.$navigator.navigate(name);
      }
    }
  }
</script>