import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './components/ui/GlobalStyle';
import Main from './components/Main';
import {Provider} from './components/Context';

const Routes = () => (
  <Provider>
      <Router>
         <Fragment>
            <GlobalStyle />
            <Switch>
               <Route exact path="/" component={Main}></Route>
            </Switch>
         </Fragment>
      </Router>
  </Provider>
);

export default Routes;

