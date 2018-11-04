import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { drawPlayer } from '../../actions/game';

import Space from './space';
import GameButton from './button';

import styles from './game.scss';

class Game extends React.Component {
  componentDidMount() {
    this.props.drawPlayer();
  }

  render () {
    return (<div className={'container ' + styles['game-screen']}>
      <Space title="Dealer" type="dealer" />
      <GameButton />
      <Space title="Player" type="player" />
    </div>);
  }
}

Game.propTypes = {
  drawPlayer: PropTypes.func.isRequired
};

export default connect(
  null,
  { drawPlayer }
)(Game);
