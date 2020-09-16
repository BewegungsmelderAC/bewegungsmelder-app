<template>
  <Page>
    <ActionBar :title="title">
      <NavigationButton col="0" row="0" text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" />
    </ActionBar>
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
    name: "options",
    props: [],
    data() {
      return {
        // Component data which are not part of the Vuex Store, ie. local data, go here
        title: 'Options'
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
      goBack() {
        this.$navigator.back();
      },
    }
  }
</script>