import { combineReducers } from 'redux'

import incrementAttribute from './incrementAttribute'
import decrementAttribute from './decrementAttribute'

import createCharacterTemplate from '../actions/characterTemplate'

const characters = (state = [], action) => {
  let newState = [...state]
  switch(action.type) {
    case 'ADD_CHARACTER':
      return [...state, {...action.character}]
    case 'REMOVE_CHARACTER':
      return state.filter((character) => character.id !== action.id)
    case 'INCREMENT_ATTRIBUTE':
      return incrementAttribute(state, action)
    case 'DECREMENT_ATTRIBUTE':
      return decrementAttribute(state, action)
    case 'CHANGE_NAME':
      return state.map((character) => 
      (action.characterId === character.id) ? {...character, name: action.name} : character)
    default:
      return state
  }
}

const activeCharacter = (state = createCharacterTemplate('fantasy'), action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      return {...state, name: action.name}
    case 'CHANGE_AGE':
      return {...state, age: action.age}
    case 'CHANGE_DESCRIPTION':
      return {...state, description: action.description}
    case 'NEW_CHARACTER':

      return action.character
    default:
      return state
  }
}

const d6App = combineReducers({
  activeCharacter,
  characters
})

export default d6App