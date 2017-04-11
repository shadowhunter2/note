module.exports = (option, app) => {
  return async function (ctx, next) {
    if(ctx.session.user){
      ctx.session.save();
      await next();
    }
    else{
      const testUser = await app.mysql.get('users',{
        id: 1
      })

      ctx.session.user = testUser;
      await next();
    }
  }
}