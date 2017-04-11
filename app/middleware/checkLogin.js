module.exports = (option, app) => {
  return async function (ctx, next) {
    if(!ctx.session.user){
      ctx.redirect('/login');
    }

    ctx.session.save();
    await next();
  }
}