import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch, createSelector } from 'react-redux'

import { Container, Columns, Box, Heading } from 'react-bulma-components'

import { setActiveCharacter } from '../actions'

import './Character.css'

function wholeDice (dicePoints) {
  return Math.floor(dicePoints / 3)
}

function pips (dicePoints) {
  return Math.floor(dicePoints % 3)
}

function Attribute (props) {
  return <Box>
    <h2 className='title is-6 dice-type' size={6}>{props.attribute.name}
    <span>{wholeDice(props.attribute.dicePoints)}D + {pips(props.attribute.dicePoints)}</span>
    </h2>
    {props.skills
      .filter(skill => (skill.attributeId === props.attribute.id))
      .map(skill => <Skill key={skill.name} skill={skill} attributePoints={props.attribute.dicePoints} />) }
  </Box>
}

function Skill (props) {
  return <p className="dice-type">{props.skill.name} <span>
  {wholeDice(props.skill.dicePoints + props.attributePoints)}D + {pips(props.skill.dicePoints + props.attributePoints)}
  </span></p>
}

const Character = (props) => {
  const character = useSelector((state) => {
    if (state.characters.find(char => char.id == props.characterId)) {
      return state.characters.find(char => char.id == props.characterId)
    }
    return state.activeCharacter
  })

  return <Container>
    <Columns>
      <Columns.Column><Heading>{character.name}</Heading></Columns.Column>
      <Columns.Column><img src="http://placehold.it/420x320" alt="" /></Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column>
        <Columns>
          <Columns.Column>
            {character.attributes
              .slice(0,3)
              .map((att) => <Attribute key={att.name} attribute={att} skills={character.skills} />)}
          </Columns.Column>
          <Columns.Column>
          {character.attributes
              .slice(3,7)
              .map((att) => <Attribute key={att.name} attribute={att} skills={character.skills} />)}</Columns.Column>
        </Columns>
      </Columns.Column>
      <Columns.Column>
        <Box>
          <Heading size={6}>Background</Heading>
        </Box>
      </Columns.Column>
    </Columns>
  </Container>
}

export default Character