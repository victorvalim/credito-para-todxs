/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import allActions from './actions';
import Home from './paginas/Home';
import NoMatch from './paginas/NoMatch';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
