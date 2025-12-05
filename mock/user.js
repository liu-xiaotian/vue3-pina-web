import md5 from 'md5'

export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      const checkUser = getUser().find(
        (item) => item.username === username && md5(item.password) === password
      )
      if (!checkUser) {
        return {
          code: 0,
          data: { message: '用户名或密码错误' }
        }
      }
      const { token, avatar } = checkUser
      return {
        code: 200,
        data: { message: '登录成功', token: token, avatar }
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
      avatar: 'https://linux.do/user_avatar/linux.do/tim_123/288/1050889_2.png',
      rules: '管理员',
      token: crypto.randomUUID()
    }
  ]
}
