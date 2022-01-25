<template>
  <div class="basic">
    <el-row class="contain">
      <el-col :span="12">
        <el-cascader
          :props="props"
          v-model="companyList"
          filterable
          @before-filter="filterRegion"
          :options="options">
        </el-cascader>
      </el-col>
      <el-col :span="12">
        <p>输出值：{{ companyList }}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      options: [],
      props: {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node
          if (level === 0) return
          // const param = {
          //   company: node.data.label,
          //   cid: node.data.value,
          // }
          let param = {}
          if (level === 0) {
            param = {
              keyword: '',
            }
          }
          console.log(node)
          axios.post('/cascader/getCompanyList', param).then(res => {
            const nodes = res.data.data.map(item => {
              return {
                label: item.company,
                leaf: level >= 2,
                value: item.cid,
              }
            })
            resolve(nodes)
          })
        },
      },
      companyList: [],
    }
  },
  methods: {
    filterRegion() {
      return false
    },
  },
}
</script>

<style></style>
