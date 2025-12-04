export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      const checkUser = getUser().find(
        (item) => item.username === username && item.password === password
      )
      if (!checkUser) {
        return {
          code: 0,
          data: { message: '用户名或密码错误' }
        }
      }
      const { token } = checkUser
      return {
        code: 200,
        data: { message: '登录成功', token: token }
      }
    }
  }
]

function getUser() {
  return [
    {
      userId: 1,
      username: 'admin',
      password: 'admin888',
      avatar:
        'https://i2.hdslb.com/bfs/face/27b3ae362890a3fbeb50f70b4cd62566d0e72374.jpg@128w_128h_1c_1s.webp',
      rules: '管理员',
      token: 'token'
    }
  ]
}
