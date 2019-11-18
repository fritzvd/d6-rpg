import React from 'react'
import {Box} from 'react-bulma-components'
import styled from 'styled-components'

const SmallInput = styled.input`
  width: 3em !important;
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
  let minDice = 0
  if (props.attribute.minimumDicePoints && !isNaN(props.attribute.minimumDicePoints)) {
    Math.floor(props.attribute.minimumDicePoints / 3)
  }
  let maxDice = 0
  if (props.attribute.maximumDicePoints && !isNaN(props.attribute.maximumDicePoints)) {
    Math.floor(props.attribute.maximumDicePoints / 3)
  }
  return <Box>
    <SpaceBetween>
      <AttributeTitle>{props.attribute.name}</AttributeTitle>
      <AttributeScore>
        <SmallInput
          min={minDice}
          max={maxDice}
          pattern="[0-9]*"
          type="number"
          className="is-primary input"
          help="Change amount of full dice"
          value={Math.floor(props.attribute.dicePoints / 3)}
          onChange={(e) => props.onChangeDice(e.target.value)}/>
        <AdjustedHeight>D +</AdjustedHeight>
        <SmallInput
          min={0}
          max={2}
          pattern="[0-9]*"
          type="number"
          className="is-warning input"
          help="Change amount of pips"
          value={props.attribute.dicePoints % 3}
          onChange={(e) => props.onChangePips(e.target.value)}/>
      </AttributeScore>
    </SpaceBetween>
  </Box>
}