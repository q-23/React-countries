import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import store from './store';
import DevTools from './DevTools';
import { getCountries } from './actions/actions-countries';

store.dispatch(getCountries());

render(
  <Provider store={store}>
    <div>
      <Router history={hashHistory} routes={routes}/>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
