import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';
import App from './routes/app';

import Note from './routes/note/';
import NewNote from './routes/note/new';

import Calendar from './routes/calendar/';
import NewCalendar from './routes/calendar/new';

import Del from './routes/del/';

import NotFound from './routes/notFound';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>

        <IndexRedirect to="/note"/>

        <Route path="/note" component={Note} />
        <Route path="/note/new" component={NewNote} />

        <Route path="/calendar" component={Calendar} />
        <Route path="/calendar/new" component={NewCalendar} />

        <Route path="/del" component={Del} />

        <Route path="*" component={NotFound} />
        
      </Route>
    </Router>
  );
}

export default RouterConfig;
