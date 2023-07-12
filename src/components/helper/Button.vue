<template>
  <button
      class="btn btn-danger float-start"
      :class="cancelButtonClasses"
      @click.prevent="cancelAction"
      ref="closeRef"
  >
    {{ cancelButtonText }}
  </button>
  <button
      class="btn float-end"
      :class="applyButtonClasses"
      style="background:#42b883; color: white"
      @click="applyAction">
    {{ applyButtonText }}
  </button>
</template>

<script setup lang="ts">

defineProps({
  cancelButtonText: {
    type: String,
    default: 'Cancel'
  },
  applyButtonText: {
    type: String,
    default: 'Save'
  },
  cancelButtonClasses: {
    type: String,
    default: ''
  },
  applyButtonClasses: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['action'])


const cancelAction = () => {
  emit('cancelAction')
}

const applyAction = () => {
  emit('applyAction')
}
</script>