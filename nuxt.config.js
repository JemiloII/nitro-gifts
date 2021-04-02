const fs = require('fs');
const redirect = require('./redirect');
redirect.start();

export default {
  server: {
    host: '0.0.0.0',
    port: 443,
    timing: false,
    https: {
      cert: fs.readFileSync('C:\\Certbot\\live\\nitro.shibiko.io\\fullchain.pem', 'utf8'),
      key: fs.readFileSync('C:\\Certbot\\live\\nitro.shibiko.io\\privkey.pem', 'utf8')
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Shibiko\'s Nitro Gifts',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'site_name', name: 'og:site_name', content: 'Shibiko\'s Nitro Gifts' },
      { hid: 'author', name: 'author', content: 'Shibiko#1337' },
      { hid: 'provider', name: 'provider', content: 'Shibiko#1337' },
      { hid: 'keywords', name: 'keywords', content: 'Shibiko, Nitro, Discord, Gifts, Free, Stuff, Genshin, Impact' },
      { hid: 'og:title', property:'og:title', content:'Shibiko\'s Nitro Gifts' },
      { hid: 'og:locale', property:'og:locale', content:'en_US' },
      { hid: 'og:type', property:'og:type', content:'website' },
      { hid: 'og:url', property:'og:url', content:'https://nitro.shibiko.io' },
      { hid: 'og:image', property:'og:image', content:'https://nitro.shibiko.io/shibi-nitro-gifts.png' },
      { hid: 'og:image:url', property:'og:image:url', content:'https://nitro.shibiko.io/shibi-nitro-gifts.png' },
      { hid: 'og:image:secure_url', property:'og:image:secure_url', content:'https://nitro.shibiko.io/shibi-nitro-gifts.png' },
      { hid: 'og:image:width', property:'og:image:width', content:'750' },
      { hid: 'og:image:height', property:'og:image:height', content:'422' },
      { hid: 'og:image:type', property:'og:image:type', content:'image/png' },
      { hid: 'og:image:alt', property:'og:image:alt', content:'Shibiko\'s Nitro Gifts' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'description',
        name: 'description',
        content: 'Free Discord Nitro Gift from Shibiko#1337. Website built stop the bots from stealing the discord nitros! This is first come first served.'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Free Discord Nitro Gift from Shibiko#1337. Website built stop the bots from stealing the discord nitros! This is first come first served.'
      },
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#f14668' },
      { hid: 'theme-color', name: 'theme-color', content: '#f14668' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href:'/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/theme.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    icons: {
      solid: [
        'faVolumeUp',
        'faVolumeMute'
      ]
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
