import React from 'react'
import './Overview.css'
import CharacterTitle from '../CharacterTitle/CharacterTitle'

const Overview = (props) => {
   return <>
   console.log()
      {props.characters.map((character) =>
      <CharacterTitle onClick={() => {
        console.log(character.id)
        props.setActiveCharacter(character)
        props.history.push(`/character/${character.id}`)
      }} key={character.id} character={character}/>)}
   </>
}

export default Overview