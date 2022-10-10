const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 开启代理服务器方式一
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:5000',
  //       pathRewrite: {'^/api':''},
  //       ws: true, //用于支持websocket
  //       changeOrigin: false //用于控制请求头中的host值
  //     }
  //   }
  // }
})
