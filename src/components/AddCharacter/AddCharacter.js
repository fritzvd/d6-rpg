import React from 'react'

import { StyledContainer } from '../App/App'
import { Route } from 'react-router-dom'

import Details from './Details'
import HighConcept from './HighConcept'
import SelectGameType from './SelectGameType'
import Attributes from './Attributes'
import Skills from './Skills'

const AddCharacter = (props) => {

  return (<StyledContainer fluid>
    <Route exact path="/character-creation" component={SelectGameType} />
    <Route path="/character-creation/high-concept" component={HighConcept} />
    <Route path="/character-creation/details" component={Details} />
    <Route path="/character-creation/attributes" component={Attributes}/>
    <Route path="/character-creation/skills" component={Skills}/>
  </StyledContainer>
  )
}

export default AddCharacter