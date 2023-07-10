<template>
  <div>
    <div style="border-bottom: 4px solid #42b883">
      <h4 class="w-50">Work Experience</h4>
    </div>
    <div class="mt-2 p-1" style="border: 1px dashed black; border-radius: 7px">
      <div>Software Engineer</div>
      <div style="color: #42b883">Company Name</div>
      <div class="d-flex flex-row">
        <span class="me-3">02/2022-Current</span>
        <span>Ankara/Turkey</span>
      </div>
      <ul class="list-group-flush">
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, ut.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio itaque odit.</li>
      </ul>
    </div>
    <button class="add-experience-button" @click="openModal">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </button>
  </div>
  <transition name="slide-center">
    <Modal v-if="isModalVisible" @close-modal="closeModal"/>
  </transition>
</template>

<script setup lang="ts">
import Modal from '@/components/helper/Modal.vue'
import { ref } from 'vue'

const isModalVisible = ref(false)

const openModal = () => {
  isModalVisible.value = true
}

const closeModal = () => {
  isModalVisible.value = false
}

</script>


<style scoped>

.add-experience-button {
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
}

.add-experience-button i {
  font-size: 2.5rem;
  color: #42b883
}

/* ANIMATIONS */

.slide-center-enter-active {
	-webkit-animation: slide-fwd-center 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-fwd-center 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.slide-center-leave-active {
	-webkit-animation: slide-bck-center .45s cubic-bezier(.47,0.000,.745,.715) both;
  animation:slide-bck-center 2s cubic-bezier(.47,0.000,.745,.715) both
}

/*
 * ----------------------------------------
 * animation slide-fwd-center
 * ----------------------------------------
 */
@-webkit-keyframes slide-fwd-center {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  100% {
    -webkit-transform: translateZ(160px);
    transform: translateZ(160px);
  }
}
@keyframes slide-fwd-center {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  100% {
    -webkit-transform: translateZ(160px);
    transform: translateZ(160px);
  }
}

/*
 * ----------------------------------------
 * animation slide-bck-center
 * ----------------------------------------
 */
@-webkit-keyframes slide-bck-center {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  100% {
    -webkit-transform: translateZ(-400px);
    transform: translateZ(-400px);
  }
}
@keyframes slide-bck-center {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  100% {
    -webkit-transform: translateZ(-400px);
    transform: translateZ(-400px);
  }
}

</style>