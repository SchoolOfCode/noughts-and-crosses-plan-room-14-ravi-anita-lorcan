import Board from './../Board/index';
import './App.css';
import { useState } from "react"

function App() {

  const [board, setBoard] = useState(["O", "X", null, null, null, null, null, null, null,])
  const [playerOne,setPlayerOne] = useState(true)
  function makeAMove(index) {
    const playerMove = playerOne ? "X" : "O";
    setBoard([...board.slice(0, index), playerMove, ...board.slice(index + 1)])
    setPlayerOne(!playerOne);
  }
console.log(playerOne);
  return (
    <div>
        <Board board={board} makeAMove={makeAMove} ></Board>
    </div>
    
  );
}

export default App;
