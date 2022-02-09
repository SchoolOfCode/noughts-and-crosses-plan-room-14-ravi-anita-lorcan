import Board from './../Board/index';
import './App.css';
import { useState } from "react"

function App() {

  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null,])

  return (
    <div>
        <Board board={board}></Board>
    </div>
    
  );
}

export default App;
