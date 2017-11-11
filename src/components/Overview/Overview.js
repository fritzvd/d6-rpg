import React from 'react'
import './Overview.css'
import Character from '../Character/Character'

const Overview = ({ characters, characterIds }) => {
   return characters.map((character, i) => {
     return <Character key={characterIds[i]} character={character}></Character>
   })
}

export default Overview