import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header/Header';
import MainPage from '../pages/MainPage';
import Dortable from '../pages/Dortable';
import Remember from '../pages/Remember';
import Visitors from '../pages/Visitors';
import Footer from './Footer/Footer';
import Tracker from './Tracker/Tracker';
import { Computer } from '../pages/Computer';

import Store from '../context';
import msg_ru from '../i18n/ru.json';
import msg_en from '../i18n/en.json';

const messages = { ru: msg_ru, en: msg_en };

const App = () => {
  const [lang, setLang] = React.useState(navigator.language.split('-')[0]);
  // console.log(navigator.language);
  return (
    <Store.Provider value={ { lang: lang, setLang: setLang, messages: messages[lang] } }>
      <Header active={ lang } setActive={ setLang } />
      <main>
        <Switch>
          <Route path="/" component={ MainPage } exact />
          <Route path="/dortable" component={ Dortable } />
          <Route path="/remember" component={ Remember } />
          <Route path="/visitors" component={ Visitors } />
          <Route path="/beta" component={ Computer } />
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
      <Tracker />
    </Store.Provider>
  );
}

export default App;