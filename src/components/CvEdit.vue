<template>
  <div class="edit-wrapper m-auto">
    <div class="edit-header">
      <Image/>
      <PersonalInformation/>
    </div>
    <div class="edit-body pt-2 px-4">
      <Experience/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from '@/components/Image.vue'
import PersonalInformation from '@/components/PersonalInformation.vue'
import Experience from '@/components/Experience.vue'


</script>

<style scoped>

.edit-wrapper {
  max-width: 210mm;
  height: 297mm;
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, .2),0 24px 38px 3px rgba(0, 0, 0, .2),0 9px 46px 8px rgba(0, 0, 0, .2)
}

.edit-header {
  height: 125px;
  /* TODO: Should be user defined */
  background-color: #42b883;
}

.edit-body {

}

</style>