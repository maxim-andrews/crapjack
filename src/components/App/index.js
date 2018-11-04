import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import styles from './app.scss';

function App({ dispatch }) {
  return (<div className={styles['app-splash-screen']}>
    <button className={`${ styles.btn } ${ styles.btnOutlinePrimary } ${ styles.appButtons }`} onClick={() => dispatch(push('/game')) }>Start a Game</button>
    <button className={`${ styles.btn } ${ styles.btnOutlinePrimary } ${ styles.appButtons }`} onClick={() => dispatch(push('/rules')) }>View Rules</button>
  </div>);
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(App);
