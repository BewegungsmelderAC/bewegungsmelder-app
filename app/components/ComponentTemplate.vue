<template>
  <Label :text="msg" ></Label>
</template>

<script >
  // Necessary if the component requests data from Vuex Store
  // import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        // Component data which are not part of the Vuex Store, ie. local data, go here
        msg: 'Template'
      }
    },
    components: {
      // MapGetters to get Data from Vuex Store
      // ...mapGetters({
      //   getEvents: "getEvents"
      // }),
    },
    computed: {
    },
    methods: {
    }
  }
</script>