<template>
  <div class="edit-photo d-flex justify-content-center">
    <img v-if="!selectedImage" :src="NoProfile" alt="">
    <img v-else :src="selectedImage" alt="">
    <input type="file" id="img-file" name="img-file" accept="image/*" @change="uploadImage">
  </div>
</template>

<script setup lang="ts">
import NoProfile from '@/assets/noprofile.jpg'
import { onBeforeMount, ref } from 'vue'
import { useAppStore } from '@/store'


const store = useAppStore()
const selectedImage = ref()

const uploadImage = (event) => {
  selectedImage.value = URL.createObjectURL(event.target.files[0])
  store.setUserPhoto(selectedImage.value)
}

onBeforeMount(() => {
  const photo = store.userPhoto
  if (photo) {
    selectedImage.value = store.userPhoto
  }
})

</script>

<style scoped>

.edit-photo {
  cursor: pointer;
}

.edit-photo img {
  max-width: 125px;
  border-radius: 12px;
  position: absolute;
  top: 3rem;
}

.edit-photo input[type = "file"] {
  position: absolute;
  top: 3rem;
  width: 125px;
  height: 125px;
  opacity: 0;
  cursor: pointer;
}

/* breakpoints */

@media only screen and (max-width: 768px) {
  .edit-photo img {
    max-width: 75px;
  }

  .edit-photo input[type = "file"] {
    width: 75px;
    height: 75px;
  }
}

</style>