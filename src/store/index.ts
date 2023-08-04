import { defineStore } from 'pinia'
import Experience from '../types/store/experience/experience'
import Language from '../types/store/language'
import State from '../types/store/state'
import i18n from '../plugins/i18n'

export const useAppStore = defineStore('app', {
  state: () => ({
    userPhoto: '',
    workExperience: [] as Experience[],
    currentLanguage: {}
  }) as State,
  persist: true,
  actions: {
    setUserPhoto (photo: string) {
      this.userPhoto = photo
    },
    setWorkExperience (workExperience: Experience) {
      this.workExperience.push(workExperience)
    },
    updateWorkExperience (workExperience: Experience, index: number) {
      this.workExperience[index] = workExperience
    },
    setCurrentLanguage (currentLanguage: Language) {
      this.currentLanguage = currentLanguage
      // FIXME: Type Issue
      // @ts-ignore
      i18n.global.locale = currentLanguage.code
    }
  }

})