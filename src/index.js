import React from 'react';
import ReactDOM from 'react-dom';
import './css/aos.css';
import './css/bootstrap-datepicker.css';
import './css/bootstrap.min.css';
import './css/jquery-ui.css';
import './css/jquery.fancybox.min.css';
// import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
