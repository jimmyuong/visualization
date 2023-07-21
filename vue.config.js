const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    chainWebpack: config => {
      config.plugin('html').tap(args => {
        args[0].title = 'Visual';
        return args;
      });
    },
    transpileDependencies: true,
    productionSourceMap: false,
    lintOnSave: false,
    css: {
      loaderOptions: {
        sass: {
          additionalData: `@import "./src/scss/default.scss";`
        }
      }
    },
})
