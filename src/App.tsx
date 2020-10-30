import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { HousePage } from './pages/HousePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HousePage}/>
      </Switch>
   </Router>
  );
}

export default App;
