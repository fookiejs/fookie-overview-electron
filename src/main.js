import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import './style.css'
loadFonts()

createApp(App)
  .use(store)
  .use(vuetify)
  .use(router)
  .mount('#app')
