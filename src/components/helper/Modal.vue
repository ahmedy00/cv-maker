<template>
  <div :class="`${modalName}-modal`" class="modal-wrapper modal d-flex align-items-center justify-content-center" @click="closeModal" ref="overlayRef">
    <div class="white-ground p-2 pb-4">
      <div class="close-button float-end">
        <button class="btn d-flex" @click="cancelAction" ref="closeButtonRef">
          <i class="fa fa-times m-auto" aria-hidden="true"></i>
        </button>
      </div>
      <br><br>
      <h2 class="text-center">Add New Work Experience</h2>
      <br>
      <slot @closeModal="cancelAction"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['closeModal'])

const modalName = ref('')

const overlayRef = ref()
const closeButtonRef = ref()


const cancelAction = () => {
  emit('closeModal')
}

const closeModal = (event: MouseEvent) => {
  if (event.target === overlayRef.value) {
    emit('closeModal')
  }
}

</script>


<style scoped>

.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128,128,128,0.75);
}

.white-ground {
  background: white;
  width: 35rem;
}

.close-button {
  border-radius: 50%;
}

.close-button button {
  border: 1px solid black;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
}

</style>