import React from 'react'
import { incrementAttribute, decrementAttribute, addSkill } from '../../actions'
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
      <form
        onSubmit={e => {
          e.preventDefault()
          let selector = document.querySelector(`#select-skill-${attribute.name}`).options
          let values = Array.from(selector).filter((o) => o.selected).map((o) => o.value)
          console.log(values)
          dispatch(addSkill(characterId, attribute.id, values))}
        }>
        <label htmlFor="skillsAdd" className="f6 b db mb2">Choose some skills <span className="normal black-60"></span></label>
        <select id={`select-skill-${attribute.name}`} multiple name="skillsAdd"
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
              >
                {attribute.listOfSkills.map((skill, i) => {
                  
                  return <option key={i} value={skill.name}>{skill.name}</option>
                })}
        </select>
        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" onClick={()=>{}} value="Add Skills" type="submit" />

      </form>

    </div>
  )
}

export default Attribute