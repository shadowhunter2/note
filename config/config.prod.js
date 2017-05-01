module.exports = {
  mysql: {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '22',
      // 数据库名
      database: 'note',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  },

  testUser: {
    enable: false,
  },

  checkLogin: {
    enable: true,
    ignore: ['/login', '/reg']
  },
}