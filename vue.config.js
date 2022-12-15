module.exports = {
  // publicPath: '/Vue_shop/dist/',
  publicPath: process.env.NODE_ENV === 'production' ? '/Vue_shop/' : '/',

  css: {
    loaderOptions: {
      sass: {
        prependData: '\n           @import "@/assets/scss/main.scss";\n        '
      }
    }
  }
}
