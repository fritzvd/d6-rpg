import React from 'react'
import { connect } from 'react-redux'

import { addCharacter, newCharacter} from '../../actions'
import CharacterForm from './CharacterForm'
import './AddCharacter.css'

// import createCharacterTemplate from './characterTemplate'

import lotr from '../../data/lotr'
import NameGenerator from './name-generator'

let id = 0;
let AddCharacter = ({dispatch, character}) => {
    return (
      <div className="AddCharacter">
        <form
          onSubmit={e => {
            e.preventDefault()
          
            dispatch(addCharacter({
              ...character,
              id: id++
            }))
            dispatch(newCharacter(id))
          }}
        >
          <CharacterForm dispatch={dispatch} character={character} />
          <button>
           Add Character
          </button>
        </form>
      </div>
    )
}

const getActiveCharacter = (activeCharacter) => {
  return activeCharacter
}

const mapStateToProps = (state) => {
  return {
    character: getActiveCharacter(state.activeCharacter)
  }
}

AddCharacter = connect(mapStateToProps)(AddCharacter)

export default AddCharacter