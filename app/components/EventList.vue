<template>
  <StackLayout>
    <Button text="Refresh!" @tap="refresh"></Button>
    <Label class="message" :text="eventCount" />
    <RadListView ref="getEvents" for="event in getEvents" @itemTap="onEventTap">
      <v-template>
      <GridLayout columns="*, 3*" rows="100%" class="layout">
        <!-- <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/> -->
        <Image src="https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png" row="0" col="0" stretch="aspectFit" />

        <Label row="0" col="1" textWrap="true" class="nameLabel">
          <FormattedString>
            <Span :text="event.name" />
          </FormattedString>
        </Label>
        
      </GridLayout>
      
        <!--         <StackLayout orientation="horizontal" backgroundColor="#3c495e" height="50" width="70">
            <Label v-if="event" :text="event.name" class="nameLabel"></Label>
        </StackLayout>-->
      </v-template>
    </RadListView>
  </StackLayout>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    refresh() {
      this.$store.dispatch("fetchEvents", {
        url: "https://bm-ac.ml/api/event"
      });
    },
    onEventTap() {}
  },
  computed: {
    ...mapGetters({
      getEvents: "getEvents"
    }),
    eventCount() {
      return this.getEvents.length;
    },
    showList() {
      return eventCount() != 0;
    }
  }
};
</script>
<!-- alternatively <style scoped> for local style -->
<style>
  .layout {
    border-width: 1;
    border-color: lightgray;
    border-radius: 5;
    margin-top: 10;
  }
  .nameLabel {
    font-size: 15px;
  }
</style>