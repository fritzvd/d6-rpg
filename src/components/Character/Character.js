import React from 'react'
import { connect } from 'react-redux'

import { removeCharacter, buyAttributeDie } from '../../actions'
import Attribute from './Attribute'
import './Character.css'

const Character = ({dispatch, character}) => {
  return  (
  <div className="Character mw9 center ph3-ns">
    <div className="cf ph2-ns">
      <h1>{character.name} - {character.age}</h1>
      <div className="right-top" onClick={()=> dispatch(removeCharacter(character.id))}>x</div>
      <div className="fl w-100 pa2 ">
        {character.description}
      </div>
      {<div className="mw9">
        <div className="w-50">
         <a className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black" onClick={()=>{dispatch(buyAttributeDie(character.id))}}>Buy Attribute Die</a>
        </div>
        <div className="w-20">
        Creation points: {character.creationPoints }
        </div>
        <div className="w-20">
          Dice pool: { character.dicePool }
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
    <button></button>
  </div>
  )
}

const mapStateToProps = state => {
  return state
}
export default connect(mapStateToProps)(Character)