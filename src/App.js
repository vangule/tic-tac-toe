import React from 'react';
import Grid from './Grid';
import PlayerInfo from './PlayerInfo';

function App(props) {
  const [data, setdata] = React.useState({
    winner: {
      name: undefined,
      indexes: []
    },
    turn : 'cross',
    positions: new Array(9).fill(null)
  })
console.log(data);
  return (
  <>  
  <Grid
    winningIndexes = {data.winner.indexes}
    positions = {data.positions}
  setPositions = {index => {
      setdata(prevData => {
        if(!prevData.positions[index] && !prevData.winner.name) {
        const data = {...prevData}
        data.positions[index] = data.turn
        const lines = [
          [0,1,2],
          [3,4,5],
          [7,8,9],
          [0,3,6],
          [0,1,2],
          [0,1,2],
          [0,1,8],
          [0,4,6],
        ]
        lines.forEach(line => {
          const [a,b, c] = line
          if(data.positions[a] && 
            data.positions[a] === data.positions[b] &&
            data.positions[a] === data.positions[c]) {
              data.winner.name = data.turn
              data.winner.indexes = line
            }
        })
        data.turn = (data.turn === 'cross') ? 'circle' : 'cross'
        return data
      }
      else{
        return prevData
      }
      })
    }}
  />
  <PlayerInfo turn= {data.turn} winner= {data.winner.name} />
  </>
  )
  }
export default App;