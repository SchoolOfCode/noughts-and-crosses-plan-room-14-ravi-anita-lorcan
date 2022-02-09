import React from 'react'
import Square from '../Square'
import "./index.css"

const Board = ({ board, makeAMove }) => {

  console.log(board)

  return (
    <div className="board">
    {board.map((symbol, i) => {
      return <Square key={i} symbol={symbol} index={i} makeAMove={makeAMove} />
    })}
        
    </div>
  )
}

export default Board