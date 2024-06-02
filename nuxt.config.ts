// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

const path = require('path')

export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: false,

  nitro: {
    output: {
      publicDir: path.join(__dirname, 'docs')
    }
  },

  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/vanimate/' : '/',
    buildAssetsDir: '/static/'
  },

  build: {
    transpile: ['vuetify']
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },

    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  }
})
