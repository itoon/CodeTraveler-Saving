// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  ssr: false,
  app: {
    baseURL: "/codetraveler-saving",
    buildAssetsDir: "assets",
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/codetraveler-saving/favicon.ico",
        },
      ],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/image"],
});