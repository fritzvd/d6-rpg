import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { Container } from 'react-bulma-components'
import styled from 'styled-components'

import OverviewContainer from '../Overview/OverviewContainer'
import AddCharacter from '../AddCharacter/AddCharacter'
import CharacterContainer from '../Character/CharacterContainer'

import Menu from '../Menu/Menu'

import './App.css'
import 'react-bulma-components/dist/react-bulma-components.min.css';

import 'tachyons'


export const StyledContainer = styled(Container)`
  margin-top: .4em;
  padding: 1em;
`

const Home = (props) => (
  <StyledContainer>
    <OverviewContainer {...props} />
  </StyledContainer>
)

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/character/:id" component={CharacterContainer} />
        <Route path="/character-creation" component={AddCharacter} />
      </Switch>

    </BrowserRouter>
 
  )
}


export default App;
