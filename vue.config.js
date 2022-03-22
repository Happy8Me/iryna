module.exports = {
    publicPath: '/iryna/',
    css: {
      loaderOptions: {
        sass: {
          additionalData: `@import "@/styles/_general.sass"`
        }
      }
    }
  };