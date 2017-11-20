import React from 'react'
import { connect } from 'react-redux'

import { removeCharacter, buyAttributeDie, exportToJSON, save } from '../../actions'
import calculateDice from '../../helpers/calculateDice'
import Attribute from './Attribute'
import './Character.css'

const Character = ({dispatch, character}) => {
  return  (
  <div className="Character mw9 center ph3-ns">
    <div className="cf ph2-ns">
      <div className="fl w-100 pa2">
        <a className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
         onClick={() => dispatch(exportToJSON(character.id))}> Export To JSON </a>
        <a className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
         onClick={() => dispatch(save())}>Save All Characters</a>
         {/* // import from json with filreader? */}
      </div>
    </div>
    <div className="cf ph2-ns">
      <div className="right-top" onClick={()=> dispatch(removeCharacter(character.id, dispatch))}>x</div>
      <div className="max-width character-stuff">
        <div className="fl w-100 w-50-ns pa2">
          <strong>Character Name: </strong>{character.name}
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
      {<div className="mw9">
        <div className="w-50 pa2">
         <a className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black" onClick={()=>{dispatch(buyAttributeDie(character.id))}}>Buy Attribute Die</a>
        </div>
        <div className="w-50">
        Creation points: {character.creationPoints }
        </div>
        <div className="w-50">
          Dice pool: { calculateDice(character.dicePool) }
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

const mapStateToProps = state => {
  return state
}
export default connect(mapStateToProps)(Character)