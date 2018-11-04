import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import RootContainer from './rootContainer';
import configureStore from '../store/configureStore';

const { history, store } = configureStore();

const render = Component => {
  ReactDom.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
};

if (module.hot) {
  module.hot.accept('./rootContainer', () => {
    const RootContainer = require('./rootContainer').default;
    render(RootContainer);
  });
}

export default function renderRoot() {
  return render(RootContainer);
}
