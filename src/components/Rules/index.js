import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router/immutable'

import styles from './rules.scss';

function Rules({ dispatch }) {
  return (<div className={'container ' + styles['rules-screen']}>
    <button className={`${ styles.btn } ${ styles.btnOutlinePrimary } ${ styles.backButton }`} onClick={() => dispatch(push('/')) }>&lt; Back</button>

    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">Crap Jack Rules</h3>
      </div>
      <div className="panel-body">
        <ol>
          <li>Single player vs Dealer.</li>
          <li>Each player dealt 3 Cards.</li>
          <li>Dealer Hand will be dealt Face Down.</li>
          <li>Player hand dealt facing up.</li>
        </ol><br />

        <strong><i>Scoring</i></strong><br />
        Each card is scored as follows:<br />
        2 =2, 3=3…. 10 = 10,<br />
        Picture Cards J / Q / K / A = 10<br /><br />

        A hand scoring over 21 = Bust<br />
        The player with the hand closest to, but less than or equal to 21 wins
      </div>
    </div>
  </div>);
}

export default connect()(Rules);
