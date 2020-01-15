// import react packages
import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// import styles
import "./App.scss";

// import components
import Home from "../Views/Home";

const App = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
