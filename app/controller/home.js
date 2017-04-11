const path = require('path');
const sendToWormhole = require('stream-wormhole');
const fs = require('fs');

module.exports = app => {
  class HomeController extends app.Controller {
    async index(ctx){
      await ctx.render('home/index.htm', {index: '首页', user: ctx.session.user})
    }

    async test(ctx) {
      await ctx.render('home/test.htm')
    }

    async testForm(ctx){
      var testRule = {
        name: {
          type: 'email'
        },
        pwd: {
          type: 'string',
          min: 6
        }
      }

      try {
        ctx.validate(testRule);
      } catch (err) {
        ctx.logger.warn(err.errors);
        ctx.body = JSON.stringify({ errors: err.errors })
      }
    }

    async upload(ctx){
      const stream = await ctx.getFileStream();
      const name = 'upload/' + path.basename( stream.filename );

      let result;
      try {
        result = await ctx.oss.put(name, stream);
      } catch (error) {
        await sendToWormhole(stream);
        throw error;
      }

      ctx.body = JSON.stringify({
        url: result.url,
        fields: stream.fields
      });
    }
  }

  return HomeController;
}