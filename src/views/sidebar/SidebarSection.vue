<template>
  <div>

    <div class="title">
      {{ sections.title }}
    </div>

    <template>
        <section-item
          v-for="(item, index) in sections.items"
          :key="index"
          :item="item"
        ></section-item>
    </template>

  </div>
</template>

<script>
import SectionItem from "@/views/sidebar/SectionItem";
export default {
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
/* .title {
  border-bottom: 2px #bfbfbf solid;
  font-weight: 300;
  line-height: 1 !important;
  letter-spacing: 0.2em !important;
} */
</style>