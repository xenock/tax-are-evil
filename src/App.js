import React, { useReducer, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import logo from './assets/logo.png';
import style from './App.module.scss';
import i18n from './common/i18n';

import { Form, List } from './components';
import formData from './data';
import FormContext, { globalReducer, initialState } from './common/formContext';

const App = () => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <FormContext.Provider value={contextValue}>
      <Router>
        <main className={style.App}>
          <header className={style.header}>
            <img src={logo} className={style.logo} alt="logo" />
          </header>
          <Switch>
            <Route path="/submissions">
              <section className={style.content}>
                <List />
              </section>
            </Route>
            <Route path="/">
              <section className={style.content}>
                {state.submissions.length > 0
                   && <Link className={style.link} to="/submissions">{i18n.SUBMISSIONS}</Link>}
                <Form {...formData} />
              </section>
            </Route>
          </Switch>
        </main>
      </Router>
    </FormContext.Provider>
  );
};

export default App;
