import React from 'react'
import "./index.css"

const Square = ({ symbol, index, makeAMove }) => {

  function handleClick(index) {
    makeAMove(index)
  }

  return (
    <div className='square' onClick={() => handleClick(index)}>
        <p className='symbol'>{symbol}</p>
    </div>
  )
}

export default Square