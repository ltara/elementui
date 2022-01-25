// 引入随机函数
import { Random } from 'mockjs'
// 引入Mock
const Mock = require('mockjs')

// 定义数据

const companyListData = Mock.mock({
  'data|4': [
    {
      cid: () => Random.natural(1, 100000),
      company: () => Random.ctitle(4, 8),
      company2: () => Random.ctitle(4, 8),
      type: () => Random.increment(),
    },
  ],
})

function companyList() {
  // res是一个请求对象，包含: url, type, body
  return {
    code: 200,
    data: companyListData.data,
    message: '请求成功',
  }
}

const cascader = {
  companyList,
}

export default cascader
