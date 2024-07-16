// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/icon"],
  icon: {
		componentName: 'NuxtIcon',
		customCollections: [
			{
				prefix: 'elfi',
				dir: './assets/icons'
			},
		],
	},
})