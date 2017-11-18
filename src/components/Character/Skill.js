import React from 'react'

import { decrementSkill, incrementSkill } from '../../actions'
import './Skill.css'

import calculateDice from '../../helpers/calculateDice'

const Skill = ({dispatch, characterId, skill, attributeDice}) => {
  return (
    <div className="Skill">
      {skill.name} {(skill.dicePoints > 0) ? ` - ${calculateDice(attributeDice + skill.dicePoints)}` : ''}
      <div className="buttons">
          <button onClick={() => dispatch(decrementSkill(skill.id, characterId))}>-</button>
          <button onClick={() => dispatch(incrementSkill(skill.id, characterId))}>+</button>
        </div>
    </div>
  )
}

export default Skill