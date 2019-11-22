import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { Container, Hero, Heading } from 'react-bulma-components'
import styled from 'styled-components'

import OverviewContainer from '../Overview/OverviewContainer'
import AddCharacter from '../AddCharacter/AddCharacter'
import CharacterContainer from '../Character/CharacterContainer'
import Character from '../Character'

import Menu from '../Menu/Menu'

import 'react-bulma-components/dist/react-bulma-components.min.css';


export const StyledContainer = styled(Container)`
  margin-top: .4em;
  padding: 1em;
`

const Home = (props) => (
  <>
  <Hero color="light">
    <Hero.Body>
      <Heading>OpenD6 Utility</Heading>
      <Heading subtitle size={6}>Create and keep track of characters</Heading>
    </Hero.Body>
  </Hero>
  <StyledContainer>
    <OverviewContainer {...props} />
  </StyledContainer>
  </>
)

const App = () => {
  return (
    <BrowserRouter basename="/d6-rpg" >
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/character/:id" render={(props) => <Character characterId={props.match.params.id}/>} />
        <Route path="/character-creation" component={AddCharacter} />
      </Switch>

    </BrowserRouter>
 
  )
}


export default App;
