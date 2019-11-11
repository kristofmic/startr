import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter, Redirect, Route, StaticRouter, Switch } from 'react-router-dom';


import Landing from '../pages/Landing';

const Router = process.env.BROWSER ? BrowserRouter : StaticRouter;

function MainRouter(props) {
  // Only required for server rendering
  const { context, location } = props;

  return (
    <Router context={context} location={location}>
      <Switch>
        <Route
          component={Landing}
          exact
          path="/landing"
        />

        <Redirect from="/" to="/landing" />
      </Switch>
    </Router>
  );
}

MainRouter.propTypes = {
  context: PropTypes.object,
  location: PropTypes.string,
};

export default MainRouter;
