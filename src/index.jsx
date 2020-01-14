// import react packages
import React from "react";
import ReactDOM from "react-dom";

// import serviceworker
import * as serviceWorker from "./serviceWorker";

// import react component
import App from "./App/App";

ReactDOM.render(<App />, document.getElementById("adamWebsite"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
