import React from 'react';
import Card from './card.js';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsWon: [],
      hand: props.hand.map((card, index) => {
        return (
          <Card
            key={index}
            card={card} />
        );
      })
    };
  }

  render () {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <div>Hand {this.state.hand}</div>
        <div>Points: {this.props.points}</div>
      </div>
    )
  }
}

export default Player;
