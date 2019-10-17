const path = require('path')
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: 'dist',
  publicPath: '/',
  devServer: {
    port: 9527,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_URL,
        changeOrigin: true,
        pathRewrite: {
          [process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  },
  configureWebpack: config => {
    config.name = '毛竹实施系统'
    config.resolve.alias = {
      '@': resolve('src')
    }
  }
}
