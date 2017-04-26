module.exports = (app) => {
  class NoteController extends app.Controller {
    async add(ctx){
      const body = ctx.request.body;
      ctx.body = await ctx.service.note.add(body)
    }

    async update(ctx){
      const body = ctx.request.body;
      ctx.body = await ctx.service.note.update(body)
    }

    async query(ctx){
      const query = ctx.query;

      ctx.body = await ctx.service.note.query(query);
    }

    async queryDetail(ctx){
      const id = ctx.query.id;

      ctx.body = await ctx.service.note.queryDetail(id)
    }

    async remove(ctx){
      const id = ctx.query.id;
      ctx.body = await ctx.service.note.remove(id);
    }
  }

  return NoteController;
}