import React from 'react'
import { incrementAttribute, decrementAttribute } from '../../actions' 
import './Attribute.css'

const calculateDice = (dice) => {
  const numDice = Math.floor(dice / 3)
  const pips = dice % 3
  return `${numDice}D${(pips === 0) ? '' : `+${pips}`  }`
}

const Attribute = ({dispatch, attribute, characterId}) => {
  return (
    <div className="fl w-50 pa2 Attribute">
      <strong>{attribute.name} - {calculateDice(attribute.dicePoints)} </strong>
      <div className="right-float">
        <button onClick={() => dispatch(decrementAttribute(attribute.id, characterId))}>-</button>
        <button onClick={() => dispatch(incrementAttribute(attribute.id, characterId))}>+</button>
      </div>
    </div>
  )
}

export default Attribute