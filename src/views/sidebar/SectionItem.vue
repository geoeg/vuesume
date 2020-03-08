<template>
  <v-row justify="center">
    <v-col v-if="hasIcon" cols="2" align-self="center">
      <v-icon color="indigo">
        {{ item.icon }}
      </v-icon>
    </v-col>

    <v-col cols="10" align-self="center" class="pa-0">
      <div>
        {{ item.name }}
      </div>
      <p class="ma-0">
        <a
          v-if="item.link"
          class="grey--text"
          :href="item.link"
          target="_blank"
        >
          {{ item.text }}
        </a>
        <span v-else>
          {{ item.text }}
        </span>
      </p>
    </v-col>

  </v-row>
</template>

<script>
export default {

  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    hasIcon() {
      return this.item.icon;
    }
  }
};
</script>

<style scoped></style>
