import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Specs from "./Specs";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <Specs />
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
