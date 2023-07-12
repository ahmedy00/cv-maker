import { defineStore } from 'pinia'
import { StateType, ExperienceType } from 'definitions'

export const useAppStore = defineStore('app', {
    state: () => ({
        userPhoto: '',
        workExperience: []
    }) as StateType,
    persist: true,
    actions: {
      setUserPhoto (photo: string) {
          this.userPhoto = photo
      },
      setWorkExperience (workExperience: ExperienceType) {
        this.workExperience.push(workExperience)
      },
      updateWorkExperience (workExperience: ExperienceType, index: number) {
          this.workExperience[index] = workExperience
      }
    }

})