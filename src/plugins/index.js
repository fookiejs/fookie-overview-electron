// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from './pinia'

export function registerPlugins(app) {
  loadFonts()
  app.use(vuetify)
  app.use(pinia)
}
