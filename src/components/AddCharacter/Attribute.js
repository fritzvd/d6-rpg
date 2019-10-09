import React from 'react'
import {Box, Heading} from 'react-bulma-components'
import Input from '../UI/Input'
import styled from 'styled-components'
import calculateDice from '../../helpers/calculateDice'
import formFieldFactory from '../UI/formFieldFactory'

const SmallInput = styled.input`
  width: 2em !important;
`

const AdjustedHeight = styled.span`
  line-height: 2.3;
`

const AttributeScore = styled.span`
  line-height: 2.4;
`

const AttributeTitle = styled.span`
  font-weight: 700;
  line-height: 2.4;
`

const SpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default function Attribute (props) {
  return <Box>
    <SpaceBetween>
      <AttributeTitle>{props.attribute.name}</AttributeTitle>
      <AttributeScore>
        <SmallInput
          type="number"
          className="is-primary input"
          help="Change amount of full dice"
          value={Math.floor(props.attribute.dicePoints / 3)}
          onChange={(e) => console.log(e.target.value)}/>
        <AdjustedHeight>D +</AdjustedHeight>
        <SmallInput
          type="number"
          className="is-warning input"
          help="Change amount of pips"
          value={props.attribute.dicePoints % 3}
          onChange={(e) => console.log(e.target.value)}/>
      </AttributeScore>
    </SpaceBetween>
  </Box>
}