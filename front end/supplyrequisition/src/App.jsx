import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Square({value, onSquareClick}) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
} //create square component. will take on a value when clicked. value, onSquareClick = props


export default function Board() {
  const [xIsNext, setXIsNext] = useState(true); //boolean 
  const [squares, setSquares] = useState(Array(9).fill(null)); //will store values of the board

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (squares[i]) {
      return; //if square is filled, return to top of handleClick 
    }
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares); //updates array storing values of the board 
    setXIsNext(!xIsNext); //updates boolean to opposite value 
  }
  return (
    <>
      <div className="board-row">
        /* take square component, sets value to an index on the array, defines function onSquareClick, which will call handleClick(i)*/
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/> 
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  );
}