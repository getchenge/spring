import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import dynamic from 'dva/dynamic';

function RouterConfig({ history, app }) {
  const IndexPage = dynamic({
    app,
    models: () => [
      import('../models/sections.js'),
    ],
    component: () => import('./routes/IndexPage'),
  });
  const IndexPageI = dynamic({
    app,
    models: () => [
      import('../models/sections.js'),
    ],
    component: () => import('./routes/IndexPageI'),
  });

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/v1" component={IndexPageI} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
