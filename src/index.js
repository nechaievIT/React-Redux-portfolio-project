import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import thunk from "redux-thunk";
import { legacy_createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import spamFilter from "./redux/middleware";

const store = legacy_createStore(rootReducer, compose(applyMiddleware(thunk, spamFilter)))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

reportWebVitals();