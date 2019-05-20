import React from 'react';
import Blue from './Blue';
import Green from './Green';
import Purple from './Purple';
import Header from './Header';
import Color from './Color';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <>
      <Header />
      <Switch>
        <Route path="/blue" component={Blue} />
        <Route path="/green" component={Green} />
        <Route path="/pruple" component={Purple} />
        <Route path="/:color" component={Color} />
      </Switch>
      </>
    </Router>
  );
}

//get color from params
