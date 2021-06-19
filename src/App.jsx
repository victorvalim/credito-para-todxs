/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import allActions from './actions';
import LogIn from './components/LogIn';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </>
  );
}

export default App;
