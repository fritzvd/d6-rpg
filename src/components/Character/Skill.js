import React from 'react'

import { decrementSkill, incrementSkill } from '../../actions'

const Skill = ({dispatch, characterId, skill}) => {
  return (
    <div>
      {skill.name}
      <div className="right-float">
          <button onClick={() => dispatch(decrementSkill(skill.id, characterId))}>-</button>
          <button onClick={() => dispatch(incrementSkill(skill.id, characterId))}>+</button>
        </div>
    </div>
  )
}

export default Skill