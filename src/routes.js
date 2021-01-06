import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, Registration } from './pages';

import MainLayout from 'layouts/MainLayout';
import HomePageLayout from 'layouts/HomePageLayout';

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" key="/">
        <HomePageLayout>
          <Home />
        </HomePageLayout>
      </Route>
      <Route path="/registration" key="/">
        <MainLayout>
          <Registration />
        </MainLayout>
      </Route>
    </Router>
  );
};

export default Routes;
