import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SongDetails from './components/SongDetails';
import GlobalStyle from './components/GlobalStyle';
import Home from './components/Home';
import Main from './components/Main';
import {Provider} from './components/Context';

const Routes = () => (
  <Provider>
      <Router>
         <Fragment>
            <GlobalStyle />
            <Switch>
               <Route exact path="/" component={Main}></Route>
               <Route path="/home" component={Home}></Route>
               <Route path="/song/:id" component={SongDetails}></Route>
            </Switch>
         </Fragment>
      </Router>
  </Provider>
);

export default Routes;

