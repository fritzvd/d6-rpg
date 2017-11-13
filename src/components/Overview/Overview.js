import React from 'react'
import './Overview.css'
import Character from '../Character/Character'

const Overview = ({ characters, characterIds }) => {
   return characters.map((character, i) =>
     <Character key={characterIds[i]} character={character}/>
   )
}

export default Overview