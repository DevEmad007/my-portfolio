import React from 'react'
import './App.css';
// import * as ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>its checkout</h1>
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
