<template>
  <div>
    <el-container>
        <el-aside width="auto">
            <common-aside></common-aside>
            <!-- <common-aside /> //同上作用-->
        </el-aside>
        <el-container>
            <el-header>
              <common-header></common-header>
            </el-header>
            <el-main>
                <h1>首页</h1>
                <!-- 路由出口 -->
                <!-- 路由匹配到的组件将渲染在这里 -->
                <router-view></router-view> 
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue';
import CommonHeader from '@/components/CommonHeader.vue';
export default {
  data() {
    return {};
  },
  components:{
    CommonAside,
    CommonHeader
  }
};
</script>
<style lang="less" scoped>
       .el-header {
        padding: 0;
       }
</style>