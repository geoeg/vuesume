<template>
  <v-app id="template">
    <v-content>
      <v-container fill-height fluid class="pa-0">
        <v-row justify="center" class="ma-0">
          <v-col cols="12" sm="10">
            <v-row>
              <v-col cols="12" sm="4">
                <sidebar-container></sidebar-container>
              </v-col>
              <v-col cols="12" sm="8">
                <content-container></content-container>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <timeline-container></timeline-container>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SidebarContainer from "./sidebar/SidebarContainer";
import ContentContainer from "./content/ContentContainer";
import TimelineContainer from "./timeline/TimelineContainer";

export default {
  name: "MainContainer",
  components: {
    SidebarContainer,
    ContentContainer,
    TimelineContainer
  }
};
</script>

<style scoped>
#template {
  height: 100%;
  background: -webkit-linear-gradient(to left, #b1cbfa, #7874f2); 
  background: linear-gradient(to left, #b1cbfa, #7874f2);
  background-size: cover;
}
</style>
