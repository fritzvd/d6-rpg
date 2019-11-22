import React from 'react'
import { connect } from 'react-redux'
import {changeGameType} from '../../actions'
import aT from '../../data/attributeTypes'
import { Button } from 'react-bulma-components'
import Icon from '../UI/Icon'
import Select from '../UI/Select'


function SelectGameType (props) {
  return <>
    <span>Current game: {props.gameType}</span>
    <Select label="Change game type"
      blankDefault
      options={props.gameTypes} onChange={(e) => {
      props.changeGameType(e.target.value)
      }} />
    <Button color="info" type="button" onClick={() => props.history.push("/character-creation/high-concept")}><span>Next</span><Icon iconName="arrow-right"/></Button>
  </>
}

const getGameTypes = () => {
  return Object.keys(aT).map(attr => ({name: attr}))
}

const mapStateToProps = (state) => ({
  gameType: state.gameType,
  gameTypes: getGameTypes(),
})

const mapDispatchProps = (dispatch) => ({
  changeGameType: (val) => dispatch(changeGameType(val)),
})

export default connect(mapStateToProps, mapDispatchProps)(SelectGameType)