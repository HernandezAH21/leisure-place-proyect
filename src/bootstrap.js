import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyAYGxN7IASA2QpN-dMmUN72HkG7yZpWt1c",
  authDomain: "leisure-api.firebaseapp.com",
  databaseURL: "https://leisure-api.firebaseio.com",
  projectId: "leisure-api",
  storageBucket: "leisure-api.appspot.com",
  messagingSenderId: "247128952257",
  appId: "1:247128952257:web:32fc39211a22fce65f3340",
  measurementId: "G-Y4X49XY216"
});

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
