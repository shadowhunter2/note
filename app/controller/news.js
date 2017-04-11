module.exports = (app) => {
  class NewsController extends app.Controller {
    async list(ctx){
      const page = ctx.query.page || 1;

      const resultAll = await (async () => {
        return await Promise.all([
          ctx.service.news.list(page),
          ctx.service.news.getTopics()
        ]);
      })()

      const list = resultAll[0];
      const { data: topics } = resultAll[1];
      await ctx.render('news/list.htm', { list: list, topics: topics.data })
      
    }

    async detail(ctx){
      const id = ctx.params.id;
      const { data: detail } = await ctx.service.news.getTopicDetail(id)
      await ctx.render('news/detail.htm', { detail: detail.data})
    }

    async index(ctx){
      await ctx.render('news/index.htm')
    }

    async test(ctx){
      if(ctx.session.isNew2){
        ctx.body = 'old';
        ctx.session.save();
      }
      else{
        ctx.body = 'new';
        ctx.session.isNew2 = true;
      }
    }
  }

  return NewsController;
}