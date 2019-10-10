import React from 'react'
import { connect } from 'react-redux'
import { genOccupation, changeOccupation } from '../../actions'
import { Button } from 'react-bulma-components'
import Input from '../UI/Input'
import Icon from '../UI/Icon'
import formFieldFactory from '../UI/formFieldFactory'

function Details (props) {
  return <>
    <Button color="info" type="button" onClick={() => props.history.push("/character-creation/high-concept")}>
      <Icon iconName="arrow-left" left /><span>Back</span></Button>
    <Input
      type="text"
      placeholder="Type your occupation"
      label="Occupation"
      value={props.character.occupation}
      onChange={(e) => props.changeOccupation(e.target.value)}
      help="Choose or generate a occupation"
    />
    <Button type="button" onClick={() => props.genOccupation()}>
      Generate Occupation
    </Button>
    {formFieldFactory(props, <Button color="info" type="button" onClick={() => props.history.push("/character-creation/attributes")}>
      <span>Next</span><Icon iconName="arrow-right"/>
    </Button>)}
    
 </>
}

const mapStateToProps = (state) => ({
  character: state.activeCharacter
})

const mapDispatchToProps = (dispatch) => ({
  genOccupation: () => dispatch(genOccupation()),
  changeOccupation: (val) => dispatch(changeOccupation(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)