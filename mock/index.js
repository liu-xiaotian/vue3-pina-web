import Mock from 'mockjs'

//模拟数据
export default [
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'success',
        data: Mock.mock({
          'list|5-10': [
            //数组，长度为5-10
            {
              'id|+1': 1, //自增 ID，从1开始
              name: '@cname', //中文姓名
              age: '@integer(18, 60)', //年龄
              avatar: '@image("100x100", "#50B347", "User"', //占位图
              birthday: '@date("yyyy-MM-dd")', //日期
              email: '@email', //邮箱
              isActive: '@boolean' //布尔值
            }
          ]
        })
      }
    }
  }
]
