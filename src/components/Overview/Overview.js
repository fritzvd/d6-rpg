import React from 'react'
import './Overview.css'
import CharacterTitle from '../CharacterTitle/CharacterTitle'

const Overview = (props) => {
   return <>
      {props.characters.map((character) =>
      <CharacterTitle onClick={() => {
        props.setActiveCharacter(character)
        props.history.push(`/character/${character.id}`)
      }} key={character.id} character={character}/>)}
   </>
}

export default Overview