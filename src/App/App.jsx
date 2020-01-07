// import react packages
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import styles
import "./App.scss";

// import components
import Home from "../Views/Home";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="" component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
