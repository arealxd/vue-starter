import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import kk from './locales/kk.json'
import ru from './locales/ru.json'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: 'ru',
  messages: { kk, ru },
  legacy: false
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
