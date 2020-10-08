import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./bootstrap-lite.css"

ReactDOM.render(
  <React.StrictMode>
    <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/a11y-light.css" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();