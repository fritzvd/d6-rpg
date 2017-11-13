import React from 'react'

import { changeName, changeAge, changeDescription } from '../../actions'

const CharacterForm = ({dispatch, character}) => {
  return (
    <div>
      <input
      onChange={event => {
        let name = event.target.value
        dispatch(changeName(name, character.id))
      }}
      label="Character Name"
      value={character.name}
      />
      <input type="number"
      onChange={event => {
        let age = parseInt(event.target.value)
        dispatch(changeAge(age, character.id))
      }}
      label="Age"
      value={character.age}
      />
      <input
      onChange={event => {
        let description = event.target.value
        dispatch(changeDescription(description, character.id))
      }}
      label="Description"
      value={character.description}
      />
    </div>
  )
}

export default CharacterForm