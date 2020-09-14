<template>
  <Page>
    <DefaultActionBar />


    <StackLayout>
      <Label :text="getInfo" ></Label>
    </StackLayout>
  </Page>
</template>

<script >
  // Necessary if the component requests data from Vuex Store
  // import { mapGetters } from 'vuex'

  import DefaultActionBar from '../subcomponents/DefaultActionBar'

  export default {
    name: "home",
    data() {
      return {
        // Component data which are not part of the Vuex Store, ie. local data, go here
        title: 'Home'
      }
    },
    components: {
      DefaultActionBar,
    },
    computed: {
      // MapGetters to get Data from Vuex Store
      // ...mapGetters({
      //   getEvents: "getEvents"
      // }),
      getInfo() {
        return this.$navigator.path;
      }
    },
    methods: {

    }
  }
</script>