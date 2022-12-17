// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'

export function registerPlugins(app) {
  loadFonts()
  app.use(vuetify)
}
