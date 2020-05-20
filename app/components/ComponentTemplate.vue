<template>
  <Label :text="msg" ></Label>
</template>

<script >
  // import { mapGetters } from 'vuex' // Necessary if the component requests data from store

  export default {
    data() {
      return {
        msg: 'Template' // Component data which are not part of the vuex store, ie. local data, go here
      }
    },
    components: {
    },
    computed: {
    },
    methods: {
    }
  }
</script>