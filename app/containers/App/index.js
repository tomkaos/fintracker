/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import AuthPage from 'containers/AuthPage';
import ConnectPage from 'containers/ConnectPage';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SecurePage from 'containers/SecurePage';
import ProtectedRoute from 'containers/ProtectedRoute';

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/connect/:provider" component={ConnectPage} />
        <Route exact path="/auth/:authType/:id?" component={AuthPage} />
        <ProtectedRoute exact path="/:foo" component={SecurePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
