import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "./app";
import "@/presenter/styles/slider.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router basename="/">
      <App />
    </Router>
  </Provider>,
  // </React.StrictMode>,
);
