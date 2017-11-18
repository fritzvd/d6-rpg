import { combineReducers } from 'redux'

import incrementAttribute from './incrementAttribute'
import decrementAttribute from './decrementAttribute'
import incrementSkill from './incrementSkill'
import decrementSkill from './decrementSkill'
import addSkill from './addSkill'

import createCharacterTemplate from '../actions/characterTemplate'

import NameGenerator from '../name-generator'
import lotr from '../data/lotr'

const nameGen = new NameGenerator(2, lotr)

export const characters = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CHARACTER':
      return [...state, {...action.character}]
    case 'REMOVE_CHARACTER':
      return state.filter((character) => character.id !== action.id)
    case 'INCREMENT_ATTRIBUTE':
      return incrementAttribute(state, action)
    case 'DECREMENT_ATTRIBUTE':
      return decrementAttribute(state, action)
    case 'INCREMENT_SKILL':
      return incrementSkill(state, action)
    case 'DECREMENT_SKILL':
      return decrementSkill(state, action)
    case 'BUY_ATTRIBUTE_DIE':
      return state.map((character) => {
        if (action.id === character.id && character.dicePool < 3 * 18) {
          character = {...character, 
            creationPoints: character.creationPoints - 4,
            dicePool: character.dicePool + 3
          }
        } 
        return character
      })
    case 'ADD_SKILL':
      return addSkill(state, action)
    case 'CHANGE_NAME':
      return state.map((character) => 
      (action.characterId === character.id) ? {...character, name: action.name} : character)
    default:
      return state
  }
}
const gameType = (state='fantasy', action) => {
  switch (action.type) {
  case 'CHANGE_GAME_TYPE':
    return action.name
  default:
    return state
  }
}

const defaultCharacter = {
  ...createCharacterTemplate('fantasy'),
  name: nameGen.newName()
}

export const activeCharacter = (state = defaultCharacter, action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      return {...state, name: action.name}
    case 'CHANGE_AGE':
      return {...state, age: action.age}
    case 'CHANGE_DESCRIPTION':
      return {...state, description: action.description}
    case 'NEW_CHARACTER':
      return {...action.character, name: nameGen.newName()}
    case 'CHANGE_GAME_TYPE':
      return {...createCharacterTemplate(action.name), name: nameGen.newName()}
    default:
      return state
  }
}

const d6App = combineReducers({
  activeCharacter,
  characters,
  gameType
})

export default d6App