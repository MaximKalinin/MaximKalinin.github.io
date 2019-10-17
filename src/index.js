import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import MainPage from './pages/MainPage';
// import Dortable from './pages/Dortable';
// import Footer from './components/Footer/Footer';
// import Remember from './pages/Remember';
// import Visitors from './pages/Visitors';
// import Tracker from './components/Tracker/Tracker';
// import Header from './components/Header/Header';
import App from './components/App';

import('./index.css');

const app = (
  <BrowserRouter basename="#app/">
    <style>
      { `@import url('https://fonts.googleapis.com/css?family=Merriweather&display=swap');` }
      { `@import url('https://fonts.googleapis.com/css?family=VT323&display=swap');` }
    </style>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
