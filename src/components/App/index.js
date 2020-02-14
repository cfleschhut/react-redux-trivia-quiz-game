import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StartScreen } from '../StartScreen';
import { GameScreen } from '../GameScreen';
import './styles.scss';

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <StartScreen />
      </Route>
      <Route path="/game">
        <GameScreen />
      </Route>
    </Switch>
  </Router>
);
