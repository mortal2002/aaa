const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  lintOnSave: false//关闭校验,待你会规范代码就可以不用写这个了

})
