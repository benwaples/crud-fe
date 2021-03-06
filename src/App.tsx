import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { HousePage } from './pages/HousePage';
import { DetailPage } from './pages/DetailPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/houses' component={HousePage}/>
        <Route exact path='/houses/:id' component={DetailPage}/>
      </Switch>
   </Router>
  );
}

export default App;
