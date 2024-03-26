/* eslint-disable react/prop-types */
import "./Game.css"

export default function Square({squares, changeArray, index, handle, value}) {
    function handleClick() {
        handle();
        changeArray(index); 
    }
    return <button className="square" disabled={squares[index]!=null} onClick={handleClick}>{value}</button>;
  }