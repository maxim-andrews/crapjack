import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { scoreCard } from '../../actions/game';

import styles from './game.scss';
import cardBack from './card_back.svg';
import space from './s.png';

const CardBody = ({ card }) => {
  return (<div className={styles['game-card-content'] + (card ? ' ' + styles['game-card-opened']:'')}>
    <img src={cardBack} className={styles['game-card-back']} alt="" />
    <img src={card ? card['images']['svg'] : space} className={styles['game-card-front']} alt="" />
  </div>);
};

CardBody.propTypes = {
  card: PropTypes.object
};

const CardScore = ({ card }) => {
  return (<div className={styles['game-hide'] + (card ? ' ' + styles['game-show']:'')}>
    { card ? scoreCard(card.value) : 0 }
  </div>);
};

CardScore.propTypes = {
  card: PropTypes.object
};

const Card = ({ card, type }) => {
  const elements = [ <CardBody key='card' card={card} /> ];

  if (type === 'dealer') {
    elements.unshift(<CardScore key='card-score' card={card} />);
  } else {
    elements.push(<CardScore key='card-score' card={card} />);
  }

  return (<div className={styles['game-card-holder']}>{elements}</div>);
};

Card.propTypes = {
  card: PropTypes.object,
  type: PropTypes.string.isRequired
};

export default connect(
  (state, ownProps) => ({
    card: state.game.cards[ownProps.type] && state.game.cards[ownProps.type][ownProps.num] ? state.game.cards[ownProps.type][ownProps.num] : null
  })
)(Card);
