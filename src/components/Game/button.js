import React from 'react';
import { connect } from 'react-redux';

import { drawPlayer, drawDealer } from '../../actions/game';

import styles from './game.scss';

const GameButton = ({ inProgress, dealer, drawPlayer, drawDealer, score, lastWiner}) => {
  const dealerDrawed = Array.isArray(dealer) && dealer.length === 3;
  return (<div className={styles['game-button-holder']}>
    <div className={styles['game-session-score']}>
      {Object.keys(score).map((key, idx) => {
        return <span key={idx}>{key.substr(0, 1).toUpperCase() + key.substr(1) + ': ' + score[key]}</span>;
      })}
    </div>
    <button className={`${ styles.btn } ${ styles.btnOutlinePrimary }`} onClick={dealerDrawed ? drawPlayer:drawDealer} disabled={inProgress}>
      {inProgress ? 'Drawing...' : (dealerDrawed ? 'Deal' : 'Reveal') + '!'}
    </button>
    <div className={styles['game-winner']}>{!inProgress && dealerDrawed && lastWiner ? lastWiner.substr(0, 1).toUpperCase() + lastWiner.substr(1) + (lastWiner !== 'draw' ? ' won!':''):''}</div>
  </div>);
};

export default connect(
  (state, ownProps) => ({
    dealer: state.game.cards.dealer,
    inProgress: state.game.inProgress,
    lastWiner: state.game.lastWiner,
    score: state.game.score
  }),
  { drawPlayer, drawDealer }
)(GameButton);
