<template>
  <v-app id="template">
    <v-content>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" md="10">
            <v-row>
              <v-col cols="12" md="4">
                <sidebar-container></sidebar-container>
              </v-col>
              <v-col cols="12" md="8">
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
  name: "PurpleTemplateContainer",
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
  background: #7874f2;
  background-size: cover;
}
</style>

/* background: -webkit-linear-gradient(to left, #b1cbfa, #7874f2); background:
linear-gradient(to left, #b1cbfa, #7874f2); */
