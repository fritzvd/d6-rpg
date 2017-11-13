import React from 'react'
import { connect } from 'react-redux'

import { removeCharacter } from '../../actions'
import Attribute from './Attribute'
import './Character.css'

const Character = ({dispatch, character}) => {
  return  (
  <div className="Character mw9">
    <h1>{character.name} - {character.age}</h1>
    <span className="right-top" onClick={()=> dispatch(removeCharacter(character.id))}>x</span>
    <span>{character.description}</span>
    <span>{character.creationPoints}</span>
    <div className="mw9">
      {character.attributes.map((attribute) => {
        return <Attribute key={attribute.id} attribute={attribute} dispatch={dispatch} characterId={character.id}/>
      })}
    </div>
    <button></button>
  </div>
  )
}

const mapStateToProps = state => {
  return state
}
export default connect(mapStateToProps)(Character)