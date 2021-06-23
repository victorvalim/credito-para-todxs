/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from './paginas/Home';
import GlobalStyle from './componentes/GlobalStyle'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <GlobalStyle />
    </>
  );
}

export default App;
