// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    experimental: { sqliteConnector: 'native' },
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },
  app: {
    head: {
      title: '命令月报',
      htmlAttrs: {
        lang: 'zh-CN'
      },
      meta: [
        {
          name: 'description',
          content: 'Minecraft 技术性月刊，致力于分享最新的技术性更新介绍、入门教程和实用工具。'
        },
        {
          property: 'og:title',
          content: '命令月报 - Minecraft技术性月刊'
        },
        {
          property: 'og:description',
          content: 'Minecraft 技术性月刊，分享最新技术更新、教程和实用工具。'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'zh_CN' },
      ]
    }
  }
})