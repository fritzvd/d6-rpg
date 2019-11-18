import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bulma-components'
import Icon from '../UI/Icon'
import Attribute from './Attribute'
import { changeAttribute, changeAttributePips } from '../../actions'

function Attributes (props) {
  return <>
    <Button color="info" onClick={() => props.history.push('/character-creation/details')}>
      <Icon iconName="arrow-left"/><span>Back</span>
    </Button>
    {props.character.attributes.map(attr => <Attribute attribute={attr} 
    key={attr.id}
    onChangeDice={val => props.changeAttribute(props.character, attr.id, val)} onChangePips={val => props.changeAttributePips(props.character, attr.id, val)}/>)}


    <Button color="info" onClick={() => props.history.push('/character-creation/skills')}>
      <span>Next</span><Icon iconName="arrow-right"/>
    </Button>
 </>
}

const mapStateToProps = (state) => {
  return {
    character: state.activeCharacter
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeAttribute: (character, attributeId, change) => dispatch(changeAttribute(character, attributeId, change)),
  changeAttributePips: (character, attributeId, change) => dispatch(changeAttributePips(character, attributeId, change))
})

export default connect(mapStateToProps, mapDispatchToProps)(Attributes)