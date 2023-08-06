import { computed } from 'vue'
import { vuetify } from './plugins/vuetify'

export const languages = [
  {
    name: 'Turkish',
    code: 'tr'
  },
  {
    name: 'English',
    code: 'en'
  }
]

export const appName = 'CURRICULUM VITA'

export const isMobile = computed(() => {
  return vuetify.display.width.value < 480
})
