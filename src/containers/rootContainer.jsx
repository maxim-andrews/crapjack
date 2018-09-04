import React from 'react';
import { Route, Switch } from 'react-router';

import { App, Game, Rules } from '../components';

export default function rootContainer() {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/rules" component={Rules} />
    </Switch>
  );
}
