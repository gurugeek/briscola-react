import React from 'react';

const PlayingTable = (props) => {
  return (
    <div>
      <h4>Table</h4>
      <div>Lead: {props.lead}</div>
      <div>Follow: {props.follow}</div>
      <div>Discard1: {props.discard1}</div>
      <div>Discard2: {props.discard2}</div>
    </div>
  );
}

export default PlayingTable;
