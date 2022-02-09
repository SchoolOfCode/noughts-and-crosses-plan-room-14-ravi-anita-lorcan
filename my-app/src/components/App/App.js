import Board from './../Board/index';
import './App.css';
import { useState } from "react"

function App() {

  const [board, setBoard] = useState(["O", "X", null, null, null, null, null, null, null,])

  function makeAMove(index) {
    setBoard([...board.slice(0, index), "X", ...board.slice(index + 1)])
  }

  return (
    <div>
        <Board board={board} makeAMove={makeAMove} ></Board>
    </div>
    
  );
}

export default App;
