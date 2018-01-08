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

  return (
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)} scrollBehavior={{
      /**
       * Sets the behaviour for scrolling when changing state.
       * If there is a second hash in the url, scroll to the element with matching identifier.
       * Otherwise scroll to the top.
       * @override
       */
       updateScrollPosition: function updateScrollPosition() {
        console.log('hi')
        window.location.hash = window.decodeURIComponent(window.location.hash);
        const hashParts = window.location.hash.split('#');
        if (hashParts.length > 2) {
          const hash = hashParts.slice(-1)[0];
          const element = document.querySelector(`#${hash}`);
          if (element) {
            element.scrollIntoView();
          }
        } else {
          window.scrollTo(0, 0);
        }
      }
    }}>
      <Switch>
        <Route exact path="/" component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
