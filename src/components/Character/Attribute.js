import React from 'react'
import { incrementAttribute, decrementAttribute, addSkill } from '../../actions'
import Skill from './Skill'
import './Attribute.css'

import calculateDice from '../../helpers/calculateDice'

const Attribute = ({dispatch, attribute, characterId, skills}) => {
  const submitSkills = () => {
    let selector = document.querySelector(`#select-skill-${attribute.name}`).options
    let values = Array.from(selector).filter((o) => o.selected).map((o) => o.value)
    dispatch(addSkill(characterId, attribute.id, values))
  }
  return (
    <div className="fl w-100 w-50-ns pa2 Attribute">
      <div className="mb4">
        <strong>{attribute.name} - {calculateDice(attribute.dicePoints)} </strong>
        <div className="right-float">
          <button onClick={() => dispatch(decrementAttribute(attribute.id, characterId))}>-</button>
          <button onClick={() => dispatch(incrementAttribute(attribute.id, characterId))}>+</button>
        </div>
      </div>
      {
        skills.filter(skill => skill.attributeId === attribute.id).map((skill, key) => {
          return <Skill dispatch={dispatch} key={key} skill={skill}
                    characterId={characterId} attributeDice={attribute.dicePoints}/>
        })
      }
      <form
        onKeyDownCapture={ e => {
          if (e.keyCode === 13) {
            submitSkills()
          }
        }}
        onSubmit={e => {
            e.preventDefault()
            submitSkills()
          }
        }>
        <label htmlFor="skillsAdd" className="f6 b db mb2">Choose some skills <span className="normal black-60"></span></label>
        <select id={`select-skill-${attribute.name}`} multiple name="skillsAdd"
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
              >
                {attribute.listOfSkills
                  .filter((skill) => {
                    let skillNames = skills.map(listSkill => listSkill.name)
                    return skillNames.indexOf(skill.name) < 0})  // TODO: filter out names
                  .map((skill, i) => {
                  
                  return <option key={i} value={skill.name}>{skill.name}</option>
                })}
        </select>
        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" onClick={()=>{}} value="Add Skills" type="submit" />

      </form>

    </div>
  )
}

export default Attribute