import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        userPhoto: ''
    }),
    persist: true,
    actions: {
      setUserPhoto (photo: string) {
          this.userPhoto = photo
      }
    }

})