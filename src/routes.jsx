import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SongDetails from './components/SongDetails';
import GlobalStyle from './components/GlobalStyle';

const Routes = () => (
  <Router>
    <Fragment>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/song/:id" component={SongDetails}></Route>
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;
