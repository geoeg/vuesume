<template>
  <div>

    <div class="title">
      {{ options.title }}
    </div>

    <template>
        <sidebar-section-item
        v-for="(item, index) in options.items"
        :key="index"
        :item="item"
        ></sidebar-section-item>
    </template>

  </div>
</template>

<script>
import SidebarSectionItem from "@/views/sidebar/SectionItem";
export default {
  components: { SidebarSectionItem },
  props: { 
    options: { 
      type: Object, 
      default: () => {} 
    } 
  }
};
</script>

<style scoped>
/* .title {
  border-bottom: 2px #bfbfbf solid;
  font-weight: 300;
  line-height: 1 !important;
  letter-spacing: 0.2em !important;
} */
</style>