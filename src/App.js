import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/header";
import About from "./components/pages/About";

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Route
        exact
        path="/"
        render={() => {
          return (
            <div className="container">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt, aliquid?
              </p>
            </div>
          );
        }}
      />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
