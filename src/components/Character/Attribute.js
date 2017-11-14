import React from 'react'
import { incrementAttribute, decrementAttribute } from '../../actions'
import Skill from './Skill'
import './Attribute.css'

import calculateDice from '../../helpers/calculateDice'

const Attribute = ({dispatch, attribute, characterId}) => {
  return (
    <div className="fl w-50 pa2 Attribute">
      <div className="mb4">
        <strong>{attribute.name} - {calculateDice(attribute.dicePoints)} </strong>
        <div className="right-float">
          <button onClick={() => dispatch(decrementAttribute(attribute.id, characterId))}>-</button>
          <button onClick={() => dispatch(incrementAttribute(attribute.id, characterId))}>+</button>
        </div>
      </div>
      {attribute.skills.map((skill, key) => <Skill dispatch={dispatch} key={key} skill={skill} />)}
    </div>
  )
}

export default Attribute