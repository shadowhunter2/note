const api = 'https://cnodejs.org/api/v1';

module.exports = (app) => {
  class NewsService extends app.Service {
    async list(page = 1){
      const { pageSize, serverUrl} = this.app.config.news;
      const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
        data: {
          orderBy: '"$key"',
          startAt: `"${pageSize * (page - 1)}"`,
          endAt: `"${pageSize * page - 1}"`,
        },
        dataType: 'json',
      });

      var newsList = [];
      for (var key in idList){
        newsList.push(await this.ctx.curl(`${serverUrl}/item/${idList[key]}.json`, { dataType: 'json' }))
      }

      return newsList.map(res => res.data);
    }

    async getTopics(){
      var res = await this.ctx.curl(`${api}/topics`, { dataType: 'json' });
      return res;
    }

    async getTopicDetail(id){
      var res = await this.ctx.curl(`${api}/topic/${id}`, { dataType: 'json' });
      return res;
    }
  }
  return NewsService;
}