// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
   '@element-plus/nuxt',
   '@nuxtjs/tailwindcss',
   '@vee-validate/nuxt',
   '@nuxtjs/i18n',
   '@nuxt/icon',
   'nuxt-highcharts',
   'shadcn-nuxt',
   'nuxt-graphql-client'
  ],
  runtimeConfig: {
    public: {
      GQL_HOST: "https://api.escuelajs.co/graphql",
    },
  },
  imports: {
    dirs: ["graphql"],
  },
     veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
  },
 highcharts: {
    /* module options */
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  

})