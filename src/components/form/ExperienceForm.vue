<template>
  <div class="container px-4">
    <form @submit.prevent="">
      <div class="row form-row">
        <div class="form-group col-6">
          <label class="ms-2" for="role">Role/Position</label>
          <input v-model="workExperience.role" type="text" class="form-control" id="roleInput" required>
        </div>
        <div class="form-group col-6">
          <label class="ms-2" for="role">Company Name</label>
          <input v-model="workExperience.companyName" type="text" class="form-control" id="roleInput" required>
        </div>
      </div>
      <br>
      <div class="row form-row">
        <div class="form-group col-6 d-flex flex-column">
          <label class="ms-2" for="start-date">Start Date</label>
          <div class="d-flex flex-row">
            <select v-model="workExperience.startDateMonth" class="form-select" name="start-date" id="start-date" required>
              <option v-for="(month, index) in 12" :key="`${index}-month`">{{ month }}</option>
            </select>
            <select v-model="workExperience.startDateYear" class="form-select" name="start-date" id="start-date" required>
              <option v-for="(year, index) in years" :key="`${index}-year`">{{ year }}</option>
            </select>
          </div>
        </div>
        <div class="form-group col-6">
          <label class="ms-2" for="end-date">End Date</label>
          <div class="d-flex flex-row">
            <select v-model="workExperience.endDateMonth" :disabled="workExperience.isStillWorking" class="form-select" name="end-date" id="end-date" required>
              <option v-for="(month, index) in 12" :key="`${index}-month`">{{ month }}</option>
            </select>
            <select v-model="workExperience.endDateYear" :disabled="workExperience.isStillWorking" class="form-select" name="end-date" id="end-date" required>
              <option v-for="(year, index) in years" :key="`${index}-year`">{{ year }}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row form-row mt-1">
        <div class="col-6"/>
        <div class="form-group col-6">
          <input v-model="workExperience.isStillWorking" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">Still working</label>
        </div>
      </div>
      <br>
      <div class="row form-row">
        <div class="form-group col-6">
          <label class="ms-2" for="role">Country</label>
          <input v-model="workExperience.country" type="text" class="form-control" id="cityInput">
        </div>
        <div class="form-group col-6">
          <label class="ms-2" for="role">City</label>
          <input v-model="workExperience.city" type="text" class="form-control" id="cityInput">
        </div>
      </div>
      <br>
      <div class="form-row row" v-for="(detail, index) in workExperience.details" :key="`${index}-detail`">
        <div class="form-group col-9">
          <ul>
            <li>{{ detail }}</li>
          </ul>
        </div>
        <div class="form-group col-3">
          <button @click.prevent="removeDetail(index)" class="btn border-0">
            <i style="color: brown" class="fa fa-trash" aria-hidden="true"></i>
          </button>
          <button @click.prevent="editDetail(detail, index)" class="btn border-0">
            <i style="color: coral" class="fa fa-pencil" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="mb-5">
        <label for="exampleFormControlTextarea1">Add details about your work experience</label>
        <textarea v-model="detail" class="form-control" id="detailsTextArea" rows="2" ref="detailTextArea"></textarea>
        <button class="btn border-0" @click.prevent="addDetail">
          <i style="color: #42b883; font-size: 2rem" :class="!isEdit ? 'fa fa-plus' : 'fa fa-pencil-square'" aria-hidden="true"></i>
        </button>
      </div>
      <Button
          @cancelAction="cancelAction"
          @applyAction="applyAction"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, Ref, ref } from 'vue'
import Button from '@/components/helper/Button.vue'
import { useAppStore } from '@/store'
import { ExperienceType } from 'definitions'

const props = defineProps({
  editableExperience: {
    type: Object<ExperienceType>,
    default: {}
  },
  isExperienceEditing: {
    type: Boolean,
    default: false
  },
  experienceIndex: {
    type: Number,
    default: null
  }
})

const emit = defineEmits(['closeModal'])

const store = useAppStore()

const detail = ref('')
const detailTextArea = ref()
const workExperience = reactive({
  role: props.editableExperience.role || '',
  companyName: props.editableExperience.companyName ||  '',
  startDateMonth: props.editableExperience.startDateMonth ||  null,
  startDateYear: props.editableExperience.startDateYear ||  null,
  endDateMonth: props.editableExperience.endDateMonth ||  null,
  endDateYear: props.editableExperience.endDateYear ||  null,
  isStillWorking: props.editableExperience.isStillWorking ||  false,
  city: props.editableExperience.city ||  '',
  country: props.editableExperience.country ||  '',
  details: props.editableExperience.details ||  []
}) as ExperienceType


const isEdit: Ref<Boolean> = ref(false)
const editingIndex: Ref<Number | undefined> = ref()
const addDetail = () => {
  if (detail.value && !isEdit.value) {
    workExperience.details.push(detail.value)
  } else if (isEdit.value) {
    workExperience.details[editingIndex.value] = detail.value
    isEdit.value = false
  }
  detail.value = ''
}

const removeDetail = (index: number) => {
  workExperience.details.splice(index, 1)
}

const editDetail = (editableDetail: string, index: number) => {
  detailTextArea.value.focus()
  detail.value = editableDetail
  editingIndex.value = index
  isEdit.value = true
}

const cancelAction = () => {
  emit('closeModal')
}

const years = []

const applyAction = () => {
  if (workExperience.role &&
      workExperience.companyName &&
      workExperience.startDateMonth && workExperience.startDateYear &&
      ((workExperience.endDateMonth && workExperience.endDateYear) || workExperience.isStillWorking)) {
    if (!props.isExperienceEditing) {
      store.setWorkExperience(workExperience)
    } else {
      // FIXME: Type Issue
      // @ts-ignore
      store.updateWorkExperience(workExperience, props.experienceIndex)
    }
    emit('closeModal')
  }
}



onBeforeMount(() => {
  const startDate = 1970
  const endDate = new Date().getFullYear()
  for (let i = startDate; i <= endDate; i++) {
    years.push(i)
  }
})

</script>