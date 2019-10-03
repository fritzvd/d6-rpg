import React, {useState} from 'react'
import { connect } from 'react-redux'

import { addCharacter, changeName, changeGameType } from '../../actions'
import CharacterForm from './CharacterForm'
// import './AddCharacter.css'
import {StyledContainer} from '../App/App'
import Select from './Select'
import Input from './Input'
import aT from '../../data/attributeTypes'

let id = 0;
let AddCharacter = (props) => {
  const [phase, setPhase] = useState(0)
  return (<StyledContainer fluid>
    <form>
      <Select label="Choose game type" options={props.gameTypes} onChange={(e) => {
        props.changeGameType(e.target.value)
        setPhase(phase + 1)
      }} />
      {(phase >= 1) ? <Input
        type="text"
        placeholder="Type your name"
        label="Name"
        onChange={(e) => changeName(e.target.value)}
      /> : ''}
    </form>
  </StyledContainer>
  )
}

const getActiveCharacter = (activeCharacter) => {
  return activeCharacter
}

const getGameTypes = () => {
  return Object.keys(aT)
}

const mapStateToProps = (state) => {
  return {
    character: getActiveCharacter(state.activeCharacter),
    gameTypes: getGameTypes(),
    gameType: state.gameType,
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    changeGameType: (val) => dispatch(changeGameType(val)),
    changeName: (val) => dispatch(changeName(val)),
  }
}

AddCharacter = connect(
  mapStateToProps,
  mapDispatchProps
)(AddCharacter)

export default AddCharacter