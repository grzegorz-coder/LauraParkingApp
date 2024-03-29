import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LauraParkingApp from "./LauraParkingApp";
import { Provider } from "react-redux";
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <LauraParkingApp />
    </React.StrictMode>
  </Provider>
);
