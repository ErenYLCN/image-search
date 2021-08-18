import React from 'react';
import './App.scss';
import { ChameleonLogo } from './components/ChameleonLogo/ChameleonLogo';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage/LandingPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
