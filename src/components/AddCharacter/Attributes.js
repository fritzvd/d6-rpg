import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bulma-components'
import Input from '../UI/Input'
import Icon from '../UI/Icon'
import formFieldFactory from '../UI/formFieldFactory'
import Attribute from './Attribute'

function Attributes (props) {
  return <>
    {props.character.attributes.map(attr => <Attribute attribute={attr} />)}
 </>
}

const mapStateToProps = (state) => {
  console.log(state.activeCharacter)
  return {
    character: state.activeCharacter
  }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Attributes)