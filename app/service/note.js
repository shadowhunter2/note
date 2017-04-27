const _ = require('lodash');

module.exports = (app) => {
  class NoteService extends app.Service{
    async query(query={}){
      const user_id = this.ctx.session.user.id;

      try {
        const res = await app.mysql.select('notes', {
          where: { user_id},
          columns: ['id', 'title', 'create_time', 'modify_time'],
          orders: [['modify_time', 'desc']], 
        })

        console.log(res);

        return {rt: 1, list: res};
      } catch (error) {
        console.log(error);
        return {rt: 0, msg: '查询失败'};
      }
    }

    async queryDetail(id){
      try {
        const item = await app.mysql.get('notes', {
          id
        })

        return {rt: 1, item}
      } catch (error) {
        return {rt: 0, msg: '获取详情失败'}
      }
    }

    async update(data){
      const {title, content, id} = data;

      if (!title) {
        return this.ctx.body = { rt: 0, msg: '必须输入标题' };
      }

      try {
        await app.mysql.update('notes', _.merge({}, {
          id, title, content
        }, {modify_time: app.mysql.literals.now}))

         return {rt:1};

      } catch (error) {

        console.log(error);
        return {rt: 0, msg: '保存失败' }

      }
    }

    async add(data){

      const {title, content} = data;

      if (!title) {
        return this.ctx.body = { rt: 0, msg: '必须输入标题' };
      }

      const user_id = this.ctx.session.user.id;

      try {
        console.log(data);
        const res = await app.mysql.insert('notes', {
          title,
          content,
          create_time: app.mysql.literals.now,
          modify_time: app.mysql.literals.now,
          user_id
        });
        console.log(res);
        return {rt:1};

      } catch (error) {

        console.log(error);
        return {rt: 0, msg: '新增失败' }

      }
    }

    async remove(id){
      try {
        await app.mysql.delete('notes',{
          id
        })
        return {rt:1}
      } catch (error) {
        return {rt:0, msg: '删除失败'}
      }
    }
  }
  return NoteService;
}