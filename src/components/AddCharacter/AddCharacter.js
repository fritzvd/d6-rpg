import React from 'react'
import { connect } from 'react-redux'

import { addCharacter, newCharacter, changeGameType, load} from '../../actions'
import CharacterForm from './CharacterForm'
import './AddCharacter.css'
import aT from '../../data/attributeTypes'

let id = 0;
let AddCharacter = ({dispatch, character, gameTypes, gameType}) => {
  // dispatch(load(dispatch))
  return (
    <div className="AddCharacter mw9 center ph3-ns">
      <div className="cf ph2-ns">
        <a className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
        onClick={() => dispatch(load(dispatch))}>Load from cache</a>
      </div>
      <form
        onSubmit={e => {
          e.preventDefault()
        
          dispatch(addCharacter({
            ...character,
            id: id++
          }))
          dispatch(newCharacter(id, gameType))
        }}
        className="cf ph2-ns"
      >
        <label htmlFor="gameType" className="f6 b db mb2">Choose game type for character <span className="normal black-60"></span></label>
        <select name="gameType" onChange={(e)=> dispatch(changeGameType(e.target.value))} defaultValue={gameTypes[0]}
        className="input-reset ba b--black-20 pa2 mb2 db w-100"
          >
            {gameTypes.map((game, i) => {
              
              return <option key={i} value={game}>{game}</option>
            })}
        </select>
        <CharacterForm dispatch={dispatch} character={character} className="fl w-100 w-50-ns pa2"/>
        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" onClick={()=>{}} value="Create Character" type="submit" />
        
      </form>
    </div>
  )
}

const getActiveCharacter = (activeCharacter) => {
  return activeCharacter
}

const getGameTypes = () => {
  return Object.keys(aT)
}

const mapStateToProps = (state) => {
  return {
    character: getActiveCharacter(state.activeCharacter),
    gameTypes: getGameTypes(),
    gameType: state.gameType
  }
}

AddCharacter = connect(mapStateToProps)(AddCharacter)

export default AddCharacter