<template>
  <div class="edit-wrapper m-auto">
    <div class="edit-header"/>
    <Image/>
  </div>
</template>

<script setup lang="ts">
import Image from '@/components/Image.vue'


</script>

<style scoped>

.edit-wrapper {
  max-width: 210mm;
  height: 297mm;
  border: 1px solid black;
  margin-top: 1rem;
}

.edit-header {
  height: 5rem;
  /* TODO: Should be user defined */
  background-color: #f0f0f0;
  /* TODO: Should be user defined */
  border-bottom: 5px solid #e0e0e0;
}

</style>