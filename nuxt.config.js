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
      { hid: 'sitename', name: 'og:sitename', content: 'Shibiko\'s Nitro Gifts' },
      { hid: 'author', name: 'author', content: 'Shibiko#1337' },
      { hid: 'provider', name: 'provider', content: 'Shibiko#1337' },
      { hid: 'keywords', name: 'keywords', content: 'Shibiko, Nitro, Discord, Gifts, Free, Stuff, Genshin, Impact' },
      { hid: 'og:title', property:'og:title', content:'Shibiko\'s Nitro Gifts' },
      { hid: 'og:locale', property:'og:locale', content:'en_US' },
      { hid: 'og:type', property:'og:type', content:'website' },
      { hid: 'og:url', property:'og:url', content:'https://nitro.shibiko.io' },
      { hid: 'og:image', property:'og:image', content:'https://nitro.shibiko.io/shibikos-nitro-gifts-og.jpg' },
      {
        hid: 'og:image:secure_url',
        property:'og:image:secure_url',
        content:'https://nitro.shibiko.io/shibikos-nitro-gifts-og.jpg'
      },
      { hid: 'og:image:type', property:'og:image:type', content:'image/jpeg' },
      { hid: 'og:image:width', property:'og:image:width', content:'750' },
      { hid: 'og:image:height', property:'og:image:height', content:'422' },
      { hid: 'og:image:alt', property:'og:image:alt', content:'Shibiko\'s Nitro Gifts' },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'This site is created by Shibiko#1337 inorder to combat discord nitro sniping bots. He became ' +
          'quite frustrated while giving out nitros for fun, just to learn that they were being instantly taken ' +
          'by bots. So this site will give you all a glorious chance to win the nitros. All he asks is that if ' +
          'you win a nitro, share the good news.'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'This site is created by Shibiko#1337 inorder to combat discord nitro sniping bots. He became ' +
          'quite frustrated while giving out nitros for fun, just to learn that they were being instantly taken ' +
          'by bots. So this site will give you all a glorious chance to win the nitros. All he asks is that if ' +
          'you win a nitro, share the good news.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
