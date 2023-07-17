<template>
  <div>
    <span v-if="!editMode" @click="action">{{ text }}</span>
    <div v-else class="d-flex flex-row" style="border-bottom: 3px solid black; max-width: 275px;">
      <input v-model="text" class="input-text" id="textInput" type="text" ref="textInputRef">
      <div class="input-group-prepend d-flex flex-row">
        <div @click="cancelAction" class="input-group-text bg-transparent border-0 cursor-pointer">
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        <div class="input-group-text bg-transparent border-0 cursor-pointer">
          <i class="fa fa-check" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: ''
  }
})

const text = ref<string>(props.text)

const textInputRef = ref()
const editMode = ref<boolean>(false)

const action = () => {
  editMode.value = true
  textInputRef.value.focus()
}

const cancelAction = () => {
  editMode.value = false
}

</script>

<style scoped>

.input-text {
  background: transparent;
  border: none;
}

.cursor-pointer {
  cursor: pointer;
}

</style>