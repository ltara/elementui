// 引入mockjs
import Mock from 'mockjs'
// 引入模板函数类
import cascader from './cascader'

// Mock函数
const { mock } = Mock

// 设置延时
Mock.setup({
  timeout: 400,
})

// 使用拦截规则拦截命中的请求，mock(url, post/get, 返回的数据);
mock('/cascader/getCompanyList', 'post', cascader.companyList)
