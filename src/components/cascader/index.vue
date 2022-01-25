<template>
  <div class="cascader">
    <h2>cascader</h2>
    <router-link to="/cascader/basic">basic</router-link>
    <el-divider direction="vertical"></el-divider>
    <router-link to="/cascader/lazyload">lazyload</router-link>
    <el-divider></el-divider>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.cascader {
  width: 100%;
  h2 {
    text-align: center;
  }
}
</style>
