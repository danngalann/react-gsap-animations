import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/header";
import About from "./components/pages/About";
import Landing from "./components/pages/Landing";

import "./App.css";

function App() {

  return (
    <Router>
      <Header />
      <Route
        exact
        path="/"
        render={() => {
          return (
            <Landing />
          );
        }}
      />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
