<template>
  <v-card flat class="mt-2">
    <v-card-title class="pl-0">
      <p class="headline ma-0">
        {{ title }}
      </p>
    </v-card-title>

    <v-spacer></v-spacer>

    <v-card-text class="pa-0">
      <slot></slot>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  // name: "ContentSection",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>
<style></style>
