<template>
  <div>
    <div class="title pt-2 pb-2">
      {{ sections.title }}
    </div>

    <template v-if="$slots.hobbies">
      <slot name="hobbies"></slot>
    </template>

    <template v-else-if="$slots.languages">
      <slot name="languages"></slot>
    </template>

    <template v-else>
      <slot name="default">
        <section-item
          v-for="(item, index) in sections.items"
          :key="index"
          :item="item"
        ></section-item>
      </slot>
    </template>

  </div>
</template>

<script>
import SectionItem from "@/views/sidebar/SectionItem";
export default {
  // name: "SidebarSection",
  components: { SectionItem },
  props: {
    sections: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style scoped>
</style>
