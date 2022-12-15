module.exports = {
  publicPath: '/Vue_shop/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '\n           @import "@/assets/scss/main.scss";\n        '
      }
    }
  }
}
