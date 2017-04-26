module.exports = app => {
  app.get('/', 'home.index');

  app.get('/login', 'auth.loginPage');
  app.post('/api/login', 'auth.login');

  app.get('/reg', 'auth.regPage');
  app.post('/api/reg', 'auth.reg');

  app.get('/api/getUser', 'auth.getUser');

  app.post('/api/note/add', 'note.add');
  app.get('/api/note/query', 'note.query');
  app.get('/api/note/remove', 'note.remove');
  app.get('/api/note/queryDetail', 'note.queryDetail');
  app.post('/api/note/update', 'note.update');
  
  //test
  app.get('/test', 'home.test')
  app.post('/test', 'home.testForm')
  app.post('/upload', 'home.upload')
  app.get('/news', 'news.list');
  app.get('/news/index', 'news.index');
  app.get('/api/news/test', 'news.test');
}