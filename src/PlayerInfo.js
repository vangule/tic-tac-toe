import React from 'react';

function PlayerInfo(props){
  const element = props.winner ? <h1>Winner: {props.winner}</h1> :   <h2>Turn: &nbsp; {props.turn}</h2>
  
  return element;
}

export default PlayerInfo;