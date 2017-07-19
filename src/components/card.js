import React from 'react';

const Card = (props) => {
  return (
    <div onClick={() => console.log(props.card)}>
      Card: {props.card}
    </div>
  );
}

export default Card;
