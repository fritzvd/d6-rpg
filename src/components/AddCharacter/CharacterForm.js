import React from 'react'

import { changeName, changeAge, changeDescription } from '../../actions'

const CharacterForm = ({dispatch, character}) => {
  return (
    <div>
      <label htmlFor="name" className="f6 b db mb2">Name <span className="normal black-60"></span></label>
      <input required id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" onChange={event => {
        let name = event.target.value
        dispatch(changeName(name, character.id))
      }}
      label="Character Name"
      value={character.name} />
      <small id="name-desc" className="f6 black-60 db mb2">Pick a generated name, or create your own.</small>

      <label htmlFor="age" className="f6 b db mb2">Age <span className="normal black-60"></span></label>
      <input type="number"
      onChange={event => {
        let age = parseInt(event.target.value)
        dispatch(changeAge(age, character.id))
      }}
      label="Age"
      name="age"
      className="input-reset ba b--black-20 pa2 mb2 db w-100"
      value={character.age}
      />
      <div>
        <label htmlFor="description" className="f6 b db mb2">Description <span className="normal black-60">(optional)</span></label>
        <textarea
          id="description" name="description" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="description-desc" value={character.description} onChange={event => {
          let description = event.target.value
          dispatch(changeDescription(description, character.id))
          }}>
        </textarea>
        <small id="description-desc" className="f6 black-60">Write a nice back story for your character</small>
      </div>
    </div>
  )
}

export default CharacterForm