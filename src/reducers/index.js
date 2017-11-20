import { combineReducers } from 'redux'
import localforage from 'localforage'

import { addCharacter } from '../actions'

import incrementAttribute from './incrementAttribute'
import decrementAttribute from './decrementAttribute'
import incrementSkill from './incrementSkill'
import decrementSkill from './decrementSkill'
import addSkill from './addSkill'

import createCharacterTemplate from '../actions/characterTemplate'

import NameGenerator from '../name-generator'
import lotr from '../data/lotr'

import { MAX_ATTRIBUTE_DICE, ATTRIBUTE_DIE_COSTS, PIPS_IN_DIE} from '../helpers/constants'

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
        if (action.id === character.id && character.dicePool < PIPS_IN_DIE * MAX_ATTRIBUTE_DICE) {
          character = {...character, 
            creationPoints: character.creationPoints - ATTRIBUTE_DIE_COSTS,
            dicePool: character.dicePool + PIPS_IN_DIE
          }
        } 
        return character
      })
    case 'ADD_SKILL':
      return addSkill(state, action)
    case 'CHANGE_NAME':
      return state.map((character) => 
      (action.characterId === character.id) ? {...character, name: action.name} : character)
    case 'EXPORT_TO_JSON':
      let json = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(state.reduce((prevCharacter, thisCharacter) => (thisCharacter.id === action.characterId) ? thisCharacter : prevCharacter)))}`
      window.open(json, '_blank')
      return state
    case 'SAVE':
      localforage.setItem('character' + action.characterId, state.reduce((prevCharacter, thisCharacter) => (thisCharacter.id === action.characterId) ? thisCharacter : prevCharacter)).then((bla) => console.log(bla)).catch((err) => console.error(err))
      return state
    case 'LOAD':
      localforage.getItem('character0').then((character) => {
        action.dispatch(addCharacter(character))
      })
      return state
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
    case 'CHANGE_OCCUPATION':
      return {...state, occupation: action.occupation}
    case 'CHANGE_PROPERTY':
      let newState = {...state}
      newState[action.property] = action.newValue
      return newState
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