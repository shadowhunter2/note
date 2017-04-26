const path = require('path')

module.exports =  (app) => {
  return {
    keys: 'whoisyourdad',

    session: {
      key: 'EGG_SESS',
      maxAge: 20 * 60 * 1000,
    },

    'view': {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.htm': 'nunjucks'
      }
    },

    'static': {
      prefix: '/',
      dir: path.join(app.baseDir, '/dist')
    },

    // 'security':{
    //   'csrf': false
    // },

    'news': {
      pageSize: 5,
      serverUrl: 'https://hacker-news.firebaseio.com/v0'
    },

    'middleware': [
      'robot',
      'gzip',
      // 'checkLogin',
      'testUser',
    ],

    'robot': {
      ua: [
        /Baiduspider/i,
      ]
    },

    'gzip': {
      enable: false,
      threshold: 100
    },

  }

} 

