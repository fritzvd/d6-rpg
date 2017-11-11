import React from 'react'
// import input from 'material-ui/TextField'

const CharacterForm = ({character, onUpdate}) => {
  return (
    <div>
      <input
      onChange={event => {
        character.name = event.target.value
        onUpdate(character)
      }}
      label="Character Name"
      value={character.name}
      />
      <input type="number"
      onChange={event => {
        character.age = parseInt(event.target.value)
        onUpdate(character)
      }}
      label="Age"
      value={character.age}
      />
      <input
      onChange={event => {
        character.description = event.target.value
        onUpdate(character)
      }}
      label="Description"
      value={character.description}
      />
    </div>
  )
}

export default CharacterForm