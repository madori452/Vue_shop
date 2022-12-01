module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/Vue_shop/' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '\n           @import "@/assets/scss/main.scss";\n        '
      }
    }
  }
}
