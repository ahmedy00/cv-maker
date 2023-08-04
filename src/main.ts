import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router/index'
import { setupI18n } from './plugins/i18n'

import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { vuetify } from './plugins/vuetify'

console.log('vuetfiy', vuetify)


const app = createApp(App)
const pinia = createPinia()


pinia.use(piniaPluginPersistedstate)

setupI18n(app)
app.use(pinia)
app.use(router)
app.use(vuetify)
app.mount('#app')
