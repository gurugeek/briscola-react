import React from 'react';

const PlayingDeck = (props) => {
  return (
    <div>
      <h4>Deck</h4>
      <div>Briscola: {props.briscolaCard} di {props.briscolaSuit}</div>
      <div>Top: {props.topCard} di {props.topSuit}</div>
      <div>Rounds Left: {props.roundsLeft}</div>
    </div>
  );
}

export default PlayingDeck;
