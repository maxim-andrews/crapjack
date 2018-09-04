import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from '../../store/configureStore';
import Game from './index';

const store = configureStore();

import * as actions from '../../actions/game';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Game />
    </Provider>, div);
});

test('should return 10 for picture cards', () => {
  expect(actions.scoreCard('QUEEN')).toBe(10);
});

test('should return 21 for cards passed', () => {
  expect(actions.scorePlayer([
    { value: '9' },
    { value: 'QUEEN' },
    { value: '2' }
  ])).toBe(21);
});

test('should load image', done => {
  actions.loadImage('https://upload.wikimedia.org/wikipedia/commons/5/54/Card_back_06.svg')
    .then(done);
});
