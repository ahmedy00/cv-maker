<template>
  <div class="edit-photo">
    <div v-if="!selectedImage" class="no-profile-photo">
      <button class="add-image-button">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </button>
    </div>
    <img v-else :src="selectedImage" alt="">
    <input type="file" id="img-file" name="img-file" accept="image/*" @change="uploadImage">
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useAppStore } from '../store'


const store = useAppStore()
const selectedImage = ref()

const uploadImage = (event) => {
  selectedImage.value = URL.createObjectURL(event.target.files[0])
  store.setUserPhoto(selectedImage.value)
}

onBeforeMount(() => {
  // TODO: There is an issue for upload image, need to find better way (file system)
  const photo = store.userPhoto
  if (photo) {
    selectedImage.value = store.userPhoto
    console.log('selectedImage.value', selectedImage.value)
  }
})

</script>

<style scoped>

.edit-photo {
  cursor: pointer;
}

.add-image-button {
  width: 125px;
  height: 125px;
  background: transparent;
  border: none;
}

.add-image-button i {
  font-size: 50px;
  color: dimgrey;
}

.edit-photo img {
  max-width: 125px;
  position: absolute;
}

.edit-photo input[type = "file"] {
  position: absolute;
  width: 125px;
  height: 125px;
  opacity: 0;
  cursor: pointer;
}

.no-profile-photo {
  position: absolute;
  border: 1px dashed black;
  width: 125px;
  height: 125px;
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