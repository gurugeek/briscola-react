import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import PlayerClass from './components/classes/player_class.js';
import ShuffledDeck from './components/classes/cards_class.js';

import Header from './components/header.js';
import Player from './components/player.js';
import PlayingDeck from './components/playing_deck.js';
import PlayingTable from './components/playing_table.js';

var player1 = new PlayerClass('Lorenzo');
var player2 = new PlayerClass('Luca');
var deck = new ShuffledDeck();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: player1,
      player2: player2,
      deck: deck,
      discard1: null,
      discard2: null,
      lead: player1.name,
      follow: player2.name,
      roundsLeft: 20
    };
    // First deal
    for (var i=0; i<3; i++) {
      this.state.player1.hand.push(this.state.deck.pickCard());
      this.state.player2.hand.push(this.state.deck.pickCard());
    }
  }

  render() {
    return (
      <div>
        <Header />
        <PlayingDeck
          briscolaSuit={this.state.deck.tail.suit}
          briscolaCard={this.state.deck.tail.card}
          topSuit={this.state.deck.head.suit}
          topCard={this.state.deck.head.card}
          roundsLeft={this.state.roundsLeft} />
        <PlayingTable
          discard1={this.state.discard1}
          discard2={this.state.discard2}
          lead={this.state.lead}
          follow={this.state.follow}/>
        <Player
          name={this.state.player1.name}
          hand={this.state.player1.hand.map((card) => {return card.card+' di '+card.suit})}
          points={this.state.player1.points} />
        <Player
          name={this.state.player2.name}
          hand={this.state.player2.hand.map((card) => {return card.card+' di '+card.suit})}
          points={this.state.player2.points} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
