import React from 'react'

import { decrementSkill, incrementSkill } from '../../actions'
import './Skill.css'

const Skill = ({dispatch, characterId, skill}) => {
  return (
    <div className="Skill">
      {skill.name}
      <div className="buttons">
          <button onClick={() => dispatch(decrementSkill(skill.id, characterId))}>-</button>
          <button onClick={() => dispatch(incrementSkill(skill.id, characterId))}>+</button>
        </div>
    </div>
  )
}

export default Skill