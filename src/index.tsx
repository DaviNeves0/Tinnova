import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Head from './components/Head';
import './style.global.scss';


ReactDOM.render(
  <React.StrictMode>
    <Head/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


