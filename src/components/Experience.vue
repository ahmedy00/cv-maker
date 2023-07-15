<template>
  <div>
    <div style="border-bottom: 4px solid #42b883">
      <h4 class="w-50">Work Experience</h4>
    </div>
    <div v-if="!!experienceList.length" class="mt-2 p-1">
      <div v-for="(experience, index) in experienceList" :key="`${index}-experience`" style="border: 1px dashed black; padding: 5px; border-radius: 3px">
        <div class="float-end">
          <button @click="removeExperience(index)" class="btn border-0">
            <i style="color: brown; font-size: 1.2rem" class="fa fa-trash me-3" aria-hidden="true"></i>
          </button>
          <button @click="editExperience(experience, index)" class="btn border-0">
            <i style="color: coral; font-size: 1.2rem" class="fa fa-pencil" aria-hidden="true"></i>
          </button>
        </div>
        <div>{{ capitalize(experience.role) }}</div>
        <div style="color: #42b883">{{ capitalize(experience.companyName) }}</div>
        <div class="d-flex flex-row">
          <span class="me-3">{{ experience.startDateMonth + '/' + experience.startDateYear }} - {{ experience.endDateMonth ? (experience.endDateMonth + '/' + experience.endDateYear) : 'Current' }}</span>
          <span>{{ capitalize(experience.city) + '/' + capitalize(experience.country) }}</span>
        </div>
        <ul class="list-group-flush">
          <li v-for="(detail, index) in experience.details" :key="`${index}-detail`">{{ detail }}</li>
        </ul>
      </div>
    </div>
    <button class="add-experience-button" @click="openModal">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </button>
  </div>
  <div>
    <Modal v-if="isModalVisible" @close-modal="closeModal">
      <ExperienceForm
          :editable-experience="editableExperience"
          :is-experience-editing="isExperienceEditing"
          :experience-index="experienceIndex"
          @close-modal="closeModal"/>
    </Modal>
  </div>

</template>

<script setup lang="ts">
import Modal from '@/components/helper/Modal.vue'
import { onBeforeMount, ref } from 'vue'
import ExperienceForm from '@/components/form/ExperienceForm.vue'
import { useAppStore } from '../store'
import Experience from '../types/store/experience/experience'

const store = useAppStore()

const isModalVisible = ref(false)
const openModal = () => {
  isModalVisible.value = true
}
const closeModal = () => {
  isModalVisible.value = false
}

const experienceList = ref<Experience[]>([])
console.log('type22', typeof  experienceList.value)

const editableExperience = ref<Experience>({
  city: '',
  companyName: '',
  country: '',
  details: [],
  endDateMonth: null,
  endDateYear: null,
  isStillWorking: false,
  role: '',
  startDateMonth: null,
  startDateYear: null
})
console.log('type', typeof  editableExperience.value)

const isExperienceEditing = ref<Boolean>(false)

const experienceIndex = ref<Number>()

const capitalize = (word: string) => {
  return word.split(' ').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

const removeExperience = (index: number) => {
  experienceList.value.splice(index, 1)
}

const editExperience = (experience: Experience, index: number) => {
  editableExperience.value = experience
  experienceIndex.value = index
  isExperienceEditing.value = true
  isModalVisible.value = true
}

onBeforeMount(() => {
  experienceList.value = store.workExperience
})

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

</style>