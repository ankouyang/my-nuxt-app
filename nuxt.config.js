import base from "ant-design-vue/lib/base";

export default {
  env: {
    //服务端和客户端共享环境变量
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_ENV: process.env.API_ENV|| '/dev'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  router:{
    base:'/',
    extendRoutes(routes,resolve){
      routes.push({
        path:'/hello',
        name:'hello',
        component:resolve(__dirname,'pages/user.vue')
      })
    },
  },
  head: {
    title: ' 我的ssr项目',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', "@nuxtjs/proxy"],
  axios: {
    retry: { retries: 3 },
    //开发模式下开启debug
    debug: process.env.NODE_ENV == "production" ? false : true,
    //设置不同环境的请求地址
    baseURL: process.env.NODE_ENV == "production" ? "" : "",
    withCredentials: true,
    headers: { 'Content-Type': 'application/json', 'crossDomain': true },
    timeout: 5000,
  },
  proxy: {
    '/api': {
      target: 'http://localhost:8888',
      changeOrigin: true
    }
  },
  server: {
    port: 8090, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  dev:process.env.NODE_ENV !=='production',
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    filenames: {
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[contenthash].js')
    }
  }
}
