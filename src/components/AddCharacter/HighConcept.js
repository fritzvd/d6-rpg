import React from 'react'
import { connect } from 'react-redux'
import { changeDescription, changeName, genName } from '../../actions'
import { Button } from 'react-bulma-components'
import Input from '../UI/Input'
import Icon from '../UI/Icon'


function HighConcept (props) {
  return <>
  <Button color="info" type="button" onClick={() => props.history.push("/character-creation/")}><Icon iconName="arrow-left" left /><span>Back</span></Button>
  <Input
  type="text"
  placeholder="Type your name"
  label="Name"
  value={props.character.name}
  onChange={(e) => props.changeName(e.target.value)}
  help="Choose or generate a name"
  />
  <Button type="button" color="primary" onClick={() => props.genName()}>Generate Name</Button>
  <Input
    type="text"
    placeholder="Type up a short description"
    label="Description"
    help="High concept of character e.g. Greedy, clumsy wizard"
    value={props.character.description}
    onChange={(e) => props.changeDescription(e.target.value)} />
  <Button color="info" type="button" onClick={() => props.history.push("/character-creation/details")}><span>Next</span><Icon iconName="arrow-right"/></Button>
</>
}

const mapStateToProps = (state) => ({
  character: state.activeCharacter
})

const mapDispatchToProps = (dispatch) => ({
  changeDescription: (val) => dispatch(changeDescription(val)),
  changeName: (val) => dispatch(changeName(val)),
  genName: () => dispatch(genName())
})

export default connect(mapStateToProps, mapDispatchToProps)(HighConcept)