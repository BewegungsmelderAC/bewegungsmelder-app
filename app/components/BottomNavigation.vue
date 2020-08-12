<template>
  <StackLayout >
            <BottomNavigation selectedIndex="0">

              <TabStrip>
                  <TabStripItem class="tabstripitem">
                      <Label text="Home"></Label>
                      <Image src.decode="font://&#xf015;" class="fa" />
                      <!-- <Label :text="'fa-home' | fonticon" class="fas" /> -->
                  </TabStripItem>
                  <TabStripItem class="tabstripitem">
                      <Image src.decode="font://&#xf004;" class="fas" />
                  </TabStripItem>
                  <TabStripItem class="tabstripitem">
                      <Label text="Search"></Label>
                      <!-- <Label class="fas">{{'fa-search' | fonticon}} Search</Label> -->
                  </TabStripItem>
              </TabStrip>

              <TabContentItem class="first-tabcontent">
                  <GridLayout>
                      <Label text="Home Page" horizontalAlignment="center" verticalAlignment="middle"></Label>
                  </GridLayout>
              </TabContentItem>
              <TabContentItem class="second-tabcontent">
                  <GridLayout>
                      <Label text="Account Page" horizontalAlignment="center" verticalAlignment="middle"></Label>
                      <EventList></EventList>
                  </GridLayout>
              </TabContentItem>
              <TabContentItem class="third-tabcontent">
                  <GridLayout>
                      <Label text="Search Page" horizontalAlignment="center" verticalAlignment="middle"></Label>
                  </GridLayout>
              </TabContentItem>
          </BottomNavigation>

        </StackLayout>
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