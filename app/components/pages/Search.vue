<template>
  <Page>
    <ActionBar :title="title">
      <NavigationButton col="0" row="0" text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" />

      <!-- <GridLayout columns="auto, *" rows="auto">
        <Button class="nav-btn" text='Back' @tap="goBack" row="0" col="0" />
      </GridLayout> -->

    </ActionBar>

    

    <StackLayout>
      <SearchBar v-model="searchedText"
                  @textChange="onTextChanged"
                  @submit="onSubmit"
                  @clear="onClear" />
    </StackLayout>
  </Page>
</template>

<script >
  // Necessary if the component requests data from Vuex Store
  // import { mapGetters } from 'vuex'


  export default {
    name: "search",
    data() {
      return {
        // Component data which are not part of the Vuex Store, ie. local data, go here
        title: 'Search',
        searchedText: ''
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
        console.log(this.$navigator.path);
        return this.$navigator.path;
      }
    },
    methods: {
      goBack() {
        this.$navigator.back();
      },

      // Search functions
      onTextChanged() {
        console.log("search: texte changed!");
        console.log(this.searchedText);
      },
      onSubmit() {
        console.log("search: submitted");
      },
      onClear() {
        console.log("search: cleared");
      },

    }
  }
</script>