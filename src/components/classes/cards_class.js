
var rank = ['2', '4', '5', '6', '7', 'Fante', 'Cavallo', 'Re', 'Tre', 'Asso'];
var suits = ['Dinari', 'Coppe', 'Bastoni', 'Spade'];

class Card {
  constructor(suit, card, points) {
    this.suit = suit;
    this.card = card;
    this.points = points;
    this.rank = rank.indexOf(card);
    this.next = null;
  }
}

class Deck {
  constructor(suits) {
    this.cards = [];
    for (var i=0; i<suits.length; i++) {
      this.cards.push(new Card(suits[i], 'Asso', 11));
      this.cards.push(new Card(suits[i], 'Tre', 10));
      this.cards.push(new Card(suits[i], 'Re', 4));
      this.cards.push(new Card(suits[i], 'Cavallo', 3));
      this.cards.push(new Card(suits[i], 'Fante', 2));
      this.cards.push(new Card(suits[i], '7', 0));
      this.cards.push(new Card(suits[i], '6', 0));
      this.cards.push(new Card(suits[i], '5', 0));
      this.cards.push(new Card(suits[i], '4', 0));
      this.cards.push(new Card(suits[i], '2', 0));
    }
  }
}

class ShuffledDeck {
  constructor() {
    this.deck = new Deck(suits);
    this.head = this.deck.cards.splice(Math.floor(Math.random()*this.deck.cards.length), 1)[0];
    this.tail = null;
    this.count = 40;

    var curr = this.head;
    while (this.deck.cards.length > 1) {
      curr.next = this.deck.cards.splice(Math.floor(Math.random()*this.deck.cards.length), 1)[0];
      curr = curr.next;
    }
    curr.next = this.deck.cards.pop();
    this.tail = curr.next;
  }

  pickCard() {
    var pickedCard = this.head;
    this.head = this.head.next;
    this.count -= 1;
    return pickedCard;
  }
}

export default ShuffledDeck;
