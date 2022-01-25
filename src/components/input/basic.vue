<template>
  <div class="basic">
    <el-row class="contain">
      <el-col :span="12">
        <el-input v-model="value" @change="handleChange"></el-input>
      </el-col>
      <el-col :span="12">
        <p :style="'color:' + color">输出值：{{ value }}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      color: '#000000',
    }
  },
  methods: {
    handleChange() {
      this.generateColor()
    },
    generateColor() {
      let colorAngle = Math.floor(Math.random() * 360)
      // hsla(色相, 饱和度, 亮度, 透明度)
      this.color = 'hsla(' + colorAngle + ',100% ,50% , 1)'
    },
  },
}
</script>

<style lang="less" scoped>
.input {
  width: 100%;

  h2 {
    text-align: center;
  }

  .contain {
    width: 100%;
    margin-top: 20px;
    .el-input {
      width: 200px;
    }
  }
}
</style>
