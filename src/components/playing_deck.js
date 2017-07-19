import React from 'react';

const PlayingDeck = (props) => {
  return (
    <div>
      <div>
        Briscola: {props.briscolaCard} di {props.briscolaSuit}
      </div>
      <div>
        Top: {props.topCard} di {props.topSuit}
      </div>
    </div>
  );
}

export default PlayingDeck;
