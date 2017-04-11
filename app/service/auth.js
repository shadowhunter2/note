
module.exports = (app) => {
  class AuthService extends app.Service {
    async login(name, pwd){
      const userData = await app.mysql.get('users', {
        name: name
      })

      if (!userData) {
        return { rt: 0, msg: '用户不存在' };
      }

      if (userData.pwd !== app.encry(pwd)) {
        return { rt: 0, msg: '密码错误' };
      }

      delete userData.pwd;
      this.ctx.session.user = userData;
      this.ctx.rotateCsrfSecret();

      return { rt: 1 };
    }

    async reg(name, pwd){
      const userData = await app.mysql.get('users', {
        name: name
      })

      if(userData){
        return {rt:0, msg: '用户名已存在'};
      }

      const newUserData = {
        name: name,
        level: 1,
        pwd: app.encry(pwd)
      }

      try {
        const addData = await app.mysql.insert('users', newUserData);
        delete newUserData.pwd;
        this.ctx.session.user = newUserData;
        this.ctx.rotateCsrfSecret();
        return { rt: 1, user: newUserData };
      } catch (error) {
        return {rt:0, msg: error.name}
      }
    }
  }

  return AuthService;
}