import React from 'react'
import { Navbar } from 'react-bulma-components'
import {Link} from 'react-router-dom'

import logo from './logo.png'

export default class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggleMenu () {
    this.setState((state) => ({open: !state.open}))
  }
  render () { 
    return <Navbar fixed="top">
      <Navbar.Brand>
        <Link to ="/" className="navbar-item">
          <img src={logo} alt="OpenD6 logo"/>
        </Link>
        <Navbar.Burger className={this.state.open ? 'is-active': ''} onClick={() => this.toggleMenu()} />
      </Navbar.Brand>
      <Navbar.Menu className={this.state.open ? 'is-active': ''} onClick={() => this.toggleMenu()}>
        <Navbar.Container>
          <Link className="navbar-item" to="/"><span role="img" aria-label="home" >🏠</span> Home </Link>
        </Navbar.Container>
        <Navbar.Container>
          <Link className="navbar-item" to="/character-creation"><span role="img" aria-label="character">👨‍🎤</span>Create Character</Link>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  }
}