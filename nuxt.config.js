export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
 
  head: {
    title: 'event_agency',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    
  
    // SCSS file in the project
    '@/assets/css/fancybox.css',
    '@/assets/css/main.scss',
    '@/assets/css/main.css',
    '@/assets/css/media.scss',
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css'


  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
   
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/axios',
    '@nuxt/content',
    'bootstrap-vue/nuxt',
    
    
  ],
  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  }


  
}
