//option === app.config.robot
module.exports = (option, app) => {
  return async function(ctx, next){
    const agent = ctx.get('user-agent') || '';
    const isMatch = option.ua.some((ua) => {
      return ua.test(agent)
    })

    if(isMatch){
      ctx.body = '你不能来的';
    }
    else{
      await next();
    }
  }
}