<template>
  <div class="edit-personal-information">
    <div class="container g-0 h-100 p-2 d-flex flex-row">
      <div class="info row g-0 w-75 d-flex flex-column">
        <EditableText :text="'test'"/>
        <div>SOFTWARE DEVELOPER</div>
        <div>dede_dede_ahmet@hotmail.com</div>
        <div>555 555 55 55</div>
      </div>
      <div class="social row g-0 w-25 d-flex flex-column">
        <div class="col d-flex align-items-center h-25">
          <i class="fa-brands fa-github icon-style" aria-hidden="true"></i>
          <span @click="editGit" style="cursor:pointer;" class="ms-2" ref="editGitRef">
            Github
          </span>
        </div>
        <div class="col d-flex align-items-center">
          <i class="fa-brands fa-linkedin icon-style"></i>
          <span class="ms-2">
            Linkedin
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EditableText from '@/components/helper/EditableText.vue'

import { ref } from 'vue'

const editGitRef = ref()

const editGit = () => {
  editGitRef.value.focus()
}

</script>

<style scoped>

.edit-personal-information {
  width: calc(100% - 125px);
  height: 100%;
  float: right;
}

.icon-style {
  font-size: 1.5rem;
}

</style>