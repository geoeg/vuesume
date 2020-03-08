<template>
  <v-app id="template">
    <v-content>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" md="10">
            <v-row>
              <v-col cols="12" md="4" color="orange">
                <my-sidebar-container></my-sidebar-container>
              </v-col>
              <v-col cols="12" md="8" color="lime">
                <my-content-container></my-content-container>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" color="blue">
                <p>timeline</p>
                <my-timeline-container></my-timeline-container>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MySidebarContainer from "./sidebar/SidebarContainer";
import MyContentContainer from "./content/ContentContainer";
import MyTimelineContainer from "./timeline/TimelineContainer";

export default {
  name: "PurpleTemplateContainer",
  components: {
    MySidebarContainer,
    MyContentContainer,
    MyTimelineContainer
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
