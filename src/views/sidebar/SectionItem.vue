<template>
  <v-row>
    <v-col v-if="hasIcon" cols="12" sm="2">
      <v-icon color="indigo">
        {{ item.icon }}
      </v-icon>
    </v-col>

    <v-col cols="12" sm="10">
      <div>
        {{ item.name }}
      </div>
      <p>
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
  name: "SidebarSectionItem",
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
