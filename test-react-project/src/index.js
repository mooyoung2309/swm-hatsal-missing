import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render, hydrate } from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import "antd/dist/antd.css";

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>,
    rootElement
  );
} else {
  render(
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>,
    rootElement
  );
}

serviceWorker.unregister();