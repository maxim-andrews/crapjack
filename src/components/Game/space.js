import React from 'react';
import { connect } from 'react-redux';

import { scorePlayer } from '../../actions/game';
import Card from './card';

import styles from './game.scss';

const SpaceName = ({ position, title, color }) => {
  return (<div className={`text-white card-${ position } bg-${ color }`}>{title} Hand</div>);
}

const Score = ({ cards, title }) => {
  const shouldScore = cards.length > 0;
  const score = shouldScore ? scorePlayer(cards) : 0 ;

  return (<div className={styles['game-score'] + ' ' + styles['game-hide'] + (score > 0 ? ' ' + styles['game-show']:'')}>
    {title} score: {score}
  </div>);
}

const CardBody = ({ type, cards, title }) => {
  const elements = [
    <Card key='card-1' type={type} num={0} />,
    <Card key='card-2' type={type} num={1} />,
    <Card key='card-3' type={type} num={2} />,
  ];

  if (type === 'dealer') {
    elements.push(<Score key='score' cards={cards} title={title} />);
  } else {
    elements.unshift(<Score key='score' cards={cards} title={title} />);
  }

  return (<div className="card-body">{elements}</div>);
}

const Space = ({ cards, title, type }) => {
  const color = type === 'dealer' ? 'primary' : 'warning';
  const position = type === 'dealer' ? 'header' : 'footer';
  const elements = [ <CardBody key='card' cards={cards} type={type} title={title} /> ];

  if (type === 'dealer') {
    elements.unshift(<SpaceName key='space-name' position={position} title={title} color={color} />);
  } else {
    elements.push(<SpaceName key='space-name' position={position} title={title} color={color} />);
  }

  return (<div className={`card text-center border-${ color }`}>{elements}</div>);
};

export default connect(
  (state, ownProps) => ({
    cards: state.game.cards[ownProps.type] ? state.game.cards[ownProps.type] : [],
    title: ownProps.title,
    type: ownProps.type
  })
)(Space);
