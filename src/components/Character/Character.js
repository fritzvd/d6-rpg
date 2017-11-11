import React from 'react'
import { connect } from 'react-redux'
import Attribute from './Attribute'

// import {Card, CardHeader, CardText} from 'material-ui/Card';

const Character = ({dispatch, character}) => {
  return  (
  <div>
    <h1>{character.name} - {character.age}</h1>
    <span>{character.description}</span>
    {character.attributes.map((attribute) => {
      return <Attribute key={attribute.id} attribute={attribute}/>
    })}
  </div>
)
}
export default connect()(Character)