import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './components/assets/css/preloader.css';
import './components/assets/css/slick.css';
import './components/assets/css/metisMenu.css';
import './components/assets/css/owl.carousel.min.css';
import './components/assets/css/animate.min.css';
import './components/assets/css/jquery.fancybox.min.css';
import './components/assets/css/all.min.css';
import './components/assets/css/flaticon.css';
import './components/assets/css/nice-select.css';
import './components/assets/css/default.css';
import './components/assets/css/style.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
