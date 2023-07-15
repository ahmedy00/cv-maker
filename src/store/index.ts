import { defineStore } from 'pinia'
import Experience from '../types/store/experience/experience'
import State from '../types/store/state'

export const useAppStore = defineStore('app', {
    state: () => ({
        userPhoto: '',
        workExperience: []
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
      }
    }

})