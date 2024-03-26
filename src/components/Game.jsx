import Square from "./Square";
import { useState } from 'react';
import "./Game.css"

export default function Game() {

    let [prevTurn, setPrevTurn] = useState("");
    let [squares, setSquares] = useState(Array(9).fill(null));
    const restartGame = () => {
        setSquares(Array(9).fill(null));
        setPrevTurn("");
    }
    const changeArray =(i)=>{
        const newSquares = [...squares];
        newSquares[i]=(prevTurn!="" ? prevTurn : "")
        setSquares(newSquares)
    }
    const handle=()=>{
    if (prevTurn == ""){
        setPrevTurn(prevTurn="X")
    }else if (prevTurn == "X"){
        setPrevTurn(prevTurn="0")
    }else{
        setPrevTurn(prevTurn="X")
        
    }
}
    return <>
    <div>
    <h1>Tic Tac Toe</h1>
    </div>
    <div id="board">
        <Square squares={squares} changeArray={changeArray} index={0} handle={handle} value={squares[0]}/>
        <Square squares={squares} changeArray={changeArray} index={1} handle={handle} value={squares[1]}/>
        <Square squares={squares} changeArray={changeArray} index={2} handle={handle} value={squares[2]}/>
        <Square squares={squares} changeArray={changeArray} index={3} handle={handle} value={squares[3]}/>
        <Square squares={squares} changeArray={changeArray} index={4} handle={handle} value={squares[4]}/>
        <Square squares={squares} changeArray={changeArray} index={5} handle={handle} value={squares[5]}/>
        <Square squares={squares} changeArray={changeArray} index={6} handle={handle} value={squares[6]}/>
        <Square squares={squares} changeArray={changeArray} index={7} handle={handle} value={squares[7]}/>
        <Square squares={squares} changeArray={changeArray} index={8} handle={handle} value={squares[8]}/>
        <body><button id="restart-button" onClick={restartGame}>Restart Game</button></body>
      </div>
  </>;
}