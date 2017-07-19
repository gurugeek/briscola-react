import React from 'react';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hand: props.hand,
      points: props.points
    };
  }

  render () {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <div>Hand: {this.state.hand}</div>
        <div>Points: {this.state.points}</div>
      </div>
    )
  }
}

export default Player;
