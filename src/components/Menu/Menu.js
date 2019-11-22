import React, {useState} from 'react'
import { Navbar } from 'react-bulma-components'
import {Link} from 'react-router-dom'

import { newCharacter } from '../../actions'
import { useDispatch } from 'react-redux'

import logo from './logo.png'

function Menu () {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  return <Navbar fixed="top">
    <Navbar.Brand>
      <Link to ="/" className="navbar-item">
        <img src={logo} alt="OpenD6 logo"/>
      </Link>
      <Navbar.Burger className={open ? 'is-active': ''} onClick={() => setOpen(!open)} />
    </Navbar.Brand>
    <Navbar.Menu className={open ? 'is-active': ''} onClick={() => setOpen(!open)}>
      <Navbar.Container>
        <Link className="navbar-item" to="/"><span role="img" aria-label="home" >🏠</span> Home </Link>
      </Navbar.Container>
      <Navbar.Container>
        <Link className="navbar-item" onClick={() => dispatch(newCharacter(0, 'starwars'))} to="/character-creation"><span role="img" aria-label="character">👨‍🎤</span>Create Character</Link>
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>
}

export default Menu