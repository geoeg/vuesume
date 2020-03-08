<template>
  <v-app>
    <v-content>
      <main-container></main-container>
    </v-content>
  </v-app>
</template>

<script>
import MainContainer from "./views/MainContainer";

export default {
  name: "App",

  components: {
    MainContainer
  },

  data: () => ({
    //
  })
};
</script>
