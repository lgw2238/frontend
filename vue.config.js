const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({ 
  transpileDependencies: true,
  lintOnSave:false /*Turn off syntax checking*/,
  devServer: { 
    port:8081,
    proxy: { 
      '/api': { 
        target: 'http://localhost:3000/api',
        changeOrigin: true, 
        pathRewrite: { 
          '^/api': ''
        } 
      } 
    } 
  },
  outputDir: '../backend/public',
})