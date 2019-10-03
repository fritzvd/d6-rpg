import React from 'react'

import {
  changeProperty,
  removeCharacter,
  buyDie,
  save,
 } from '../../actions'
import calculateDice from '../../helpers/calculateDice'
import Attribute from './Attribute'
import './Character.css'

import {
  ATTRIBUTE_DIE,
  SKILL_DIE
} from '../../helpers/constants'

const Character = ({character, json}) => {
  const dispatch = (bla) => {console.log(bla)}
  console.log(character)
  return  (
  <div className={`Character mw9 center ph3-ns ${character.genre}`}>
    <div className="cf ph2-ns">
      <div className="fl w-100 pa2">
        <a className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
         href={json(character.id)} target="_blank"> Export To JSON </a>
        <a className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
         onClick={() => dispatch(save(character))}>Save Character</a>
         {/* // import from json with filreader? */}
      </div>
      <div className="right-top" onClick={()=> dispatch(removeCharacter(character.id, dispatch))}>x</div>
      <div className="max-width character-stuff">
        <div className="fl w-100 w-50-ns pa2">
          <strong>Character Name: </strong>
          <input value={character.name} onChange={(e) => dispatch(changeProperty(e.target.value, 'name',character.id))} />
        </div>
        <div className="fl w-100 w-50-ns pa2">
          <strong>Occupation: </strong>{character.occupation}
        </div>
        <div className="fl w-100 w-50-ns pa2">
          <strong>Race: </strong>{character.race}
        </div>
        <div className="fl w-100 w-50-ns pa2">
          <strong>Gender: </strong>{character.gender}
        </div>
        <div className="fl w-100 w-third-ns pa2">
          <strong>Age: </strong>{character.age}
        </div>
        <div className="fl w-100 w-third-ns pa2">
          <strong>Height: </strong>{character.height}
        </div>
        <div className="fl w-100 w-third-ns pa2">
          <strong>Weight: </strong>{character.weight}
        </div>
        <div className="fl w-100 pa2 ">
          <strong>Description: </strong>{character.description}
        </div>
      </div>
      {<div className="mw9 clearit">
        <div className="w-50 pa2">
         <a className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black" onClick={()=>{dispatch(buyDie(character.id, ATTRIBUTE_DIE))}}>Buy Attribute Die</a>
         <a className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black" onClick={()=>{dispatch(buyDie(character.id, SKILL_DIE))}}>Buy Skill Die</a>
        </div>
        <div className="w-50">
        Creation points: {character.creationPoints }
        </div>
        <div className="w-50">
          Attribute Dice pool: { calculateDice(character.dicePool) }
        </div>
        <div className="w-50">
          Skill Dice pool: { calculateDice(character.skillDicePool) }
        </div>
      </div>}
      <div className="">
        {character.attributes.map((attribute) => {
          return <Attribute key={attribute.id} attribute={attribute} dispatch={dispatch} characterId={character.id}
            skills={character.skills
              .filter((skill) => {
                return attribute.skillIds.indexOf(skill.id) > -1
              }) }/>
        })}
      </div>
    </div>
  </div>
  )
}

export default Character