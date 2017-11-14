import React from 'react'
import { connect } from 'react-redux'

import { addCharacter, newCharacter, changeGameType} from '../../actions'
import CharacterForm from './CharacterForm'
import './AddCharacter.css'
import aT from '../../data/attributeTypes'

let id = 0;
let AddCharacter = ({dispatch, character, gameTypes, gameType}) => {
    return (
      <div className="AddCharacter mw9 center ph3-ns">
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
          <CharacterForm dispatch={dispatch} character={character} className="fl w-100 w-50-ns pa2"/>
          <button class="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black" onClick={()=>{}}>Create Character</button>
          <select onChange={(e)=> dispatch(changeGameType(e.target.value))} defaultValue={gameTypes[0]} className="right">
            {gameTypes.map((game, i) => {
              
              return <option key={i} value={game} selected>{game}</option>
            })}
          </select>
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