import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bulma-components'
import Icon from '../UI/Icon'
import Attribute from './Attribute'

function Attributes (props) {
  return <>
    <Button color="info" onClick={() => props.history.push('/character-creation/details')}>
      <Icon iconName="arrow-left"/><span>Back</span>
    </Button>
    {props.character.attributes.map(attr => <Attribute attribute={attr} />)}


    <Button color="info" onClick={() => props.history.push('/')}>
      <span>Done</span><Icon iconName="arrow-right"/>
    </Button>
 </>
}

const mapStateToProps = (state) => {
  return {
    character: state.activeCharacter
  }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Attributes)