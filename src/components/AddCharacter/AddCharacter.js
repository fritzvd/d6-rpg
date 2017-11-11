import React from 'react'
import { connect } from 'react-redux'
// import Button from 'material-ui/Button';

import { addCharacter } from '../../actions'
import CharacterForm from './CharacterForm'

let id = 1;
class AddCharacter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      character: {
        name: '',
        age: Math.floor(Math.random() * 50),
        description: '',
        skillIds: [],
        attributeIds: [1, 2, 3, 4],
        attributes: [
          {
            id: 1,
            name: 'prowess',
            dice: 3,
            skills: [],
          },
          { 
            id: 2,
            name: 'acumen',
            dice: 2,
            skills: []
          },
          { 
            id: 3,
            name: 'finesse',
            dice: 2,
            skills: []
          },
          { 
            id: 4,
            name: 'bearing',
            dice: 4,
            skills: []
          }
        ]
      }
    }
  }

  render () {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
          
            this.props.dispatch(addCharacter({
              ...this.state.character,
              id: id++
            }))
          }}
        >
          <CharacterForm character={this.state.character} onUpdate={
            (c) => { this.setState({characer: c})}
          } />
          <button color="primary">
           Add Character
          </button>
        </form>
      </div>
    )
  }
}

AddCharacter = connect()(AddCharacter)

export default AddCharacter