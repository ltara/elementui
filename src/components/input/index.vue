<template>
  <div class="input">
    <h2>input</h2>
    <router-link to="/input/basic">basic</router-link>
    <el-divider direction="vertical"></el-divider>
    <router-link to="/input/auto-complete">el-autocomplete</router-link>
    <el-divider></el-divider>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.input {
  width: 100%;

  h2 {
    text-align: center;
  }
}
</style>
