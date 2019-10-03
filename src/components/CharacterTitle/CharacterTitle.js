import React from 'react'
import {Box, Heading} from 'react-bulma-components'


export default function CharacterTitle (props) {
  return <Box onClick={props.onClick}>
      <Heading>{props.character.name}</Heading>
      <Heading subtitle size={6}>{props.character.description}</Heading>
    </Box>
}