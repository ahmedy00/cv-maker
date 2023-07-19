import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router/index'
import { setupI18n } from './locales/i18n'
import PrimeVue from 'primevue/config'

import App from './App.vue'


const app = createApp(App)
const pinia = createPinia()


pinia.use(piniaPluginPersistedstate)

setupI18n(app)
app.use(pinia)
app.use(router)
app.use(PrimeVue)
app.mount('#app')
