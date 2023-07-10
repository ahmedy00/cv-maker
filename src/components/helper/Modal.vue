<template>
  <div :class="`${modalName}-modal`" class="modal-wrapper d-flex align-items-center justify-content-center" @click="closeModal">
    <div style="background: white; width: 35rem; height: 80vh" ref="whiteGroundRef">
      <div class="close-button">
        <button class="btn d-flex" @click="closeModal">
          <i class="fa fa-times m-auto" aria-hidden="true"></i>
        </button>
      </div>
      test
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['closeModal'])

const modalName = ref('')

const whiteGroundRef = ref()


const closeModal = (event) => {
  if (event.target !== whiteGroundRef.value) {
    emit('closeModal')
  }
}

</script>


<style scoped>

.modal-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128,128,128,0.75);
}

.close-button {
  float: right;
}

.close-button button {
  border: 1px solid black;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
}

</style>