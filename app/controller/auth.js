module.exports = (app) => {
  class AuthController extends app.Controller {
    async loginPage(ctx) {
      await ctx.render('auth/login.htm')
    }

    async login(ctx){
      const { name, pwd } = ctx.request.body;
      ctx.body = await ctx.service.auth.login(name, pwd);
    }

    async regPage(ctx){
      await ctx.render('auth/reg.htm');
    }

    async reg(ctx){
      const { name, pwd } = ctx.request.body;
      ctx.body = await ctx.service.auth.reg(name, pwd);
    }

    async getUser(ctx){
      if (ctx.session.user){
        ctx.body = ctx.session.user
      }
      else{
        ctx.redirct('/login');
      } 
    }
  }

  return AuthController;
}