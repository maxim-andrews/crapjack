import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import RootContainer from './rootContainer';
import configureStore from '../store/configureStore';

const { history, store } = configureStore();

history.listen(location => {
  if (typeof ga === 'function') {
    ga('set', 'page', location.pathname); // eslint-disable-line no-undef
    ga('send', 'pageview'); // eslint-disable-line no-undef
  }
});

const render = Component => {
  ReactDom.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
}

export default function renderRoot() {
  return render(RootContainer);
};
