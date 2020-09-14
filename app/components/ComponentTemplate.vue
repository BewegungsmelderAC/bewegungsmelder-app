<template>
  <Page>
    <ActionBar :title="getInfo" />
    <StackLayout>
      <Label :text="msg" ></Label>
    </StackLayout>
  </Page>
</template>

<script >
  // Necessary if the component requests data from Vuex Store
  // import { mapGetters } from 'vuex'

  export default {
    name: "template",
    props: [],
    data() {
      return {
        // Component data which are not part of the Vuex Store, ie. local data, go here
        msg: 'Template'
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
    }
  }
</script>