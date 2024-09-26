import { useState } from 'react'
import SquareButton from './SquareButton'

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  function handleClick(inx) {
    if (squares[inx]) {
      return;
    }
    const nextSquares = squares.slice();

    if(xIsNext){
      nextSquares[inx] = "X";
    } else {
      nextSquares[inx] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="board-row">
        <SquareButton value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <SquareButton value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <SquareButton value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <SquareButton value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <SquareButton value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <SquareButton value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <SquareButton value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <SquareButton value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <SquareButton value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  )
}

export default App
