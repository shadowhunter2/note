var isJson = require('koa-is-json');
var zlib = require('zlib');

module.exports = (option, app) => {
  return async function (ctx, next) {
    await next();

    const body = ctx.body;
    if(!body) return;

    const length = ctx.response.header['content-length'];

    if(option.threshold && length < option.threshold) return;

    const stream = zlib.createGzip();
    stream.end(body);
    ctx.body = stream;
    ctx.set('Content-Encoding', 'gzip'); 
  }
}

function show(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    })
  })
}