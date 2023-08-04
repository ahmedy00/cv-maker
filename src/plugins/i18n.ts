import { createI18n } from 'vue-i18n'
import { App } from 'vue'
import en from '@/locales/en.json'
import tr from '@/locales/tr.json'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
    tr
  }
})

export function setupI18n(app: App<Element>) {
  app.use(i18n)
}

export default i18n