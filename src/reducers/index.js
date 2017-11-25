import { combineReducers } from 'redux'
import localforage from 'localforage'

import { stateFromCache } from '../actions'

import incrementAttribute from './incrementAttribute'
import decrementAttribute from './decrementAttribute'
import incrementSkill from './incrementSkill'
import decrementSkill from './decrementSkill'
import addSkill from './addSkill'

import createCharacterTemplate from '../actions/characterTemplate'

import NameGenerator from '../name-generator'
import lotr from '../data/lotr'

import {
  ATTRIBUTE_DIE,
  SKILL_DIE,
  MAX_ATTRIBUTE_DICE,
  ATTRIBUTE_DIE_COSTS,
  PIPS_IN_DIE,
  MAX_TOTAL_SKILL_DICE,
  SKILL_DIE_COSTS
} from '../helpers/constants'

const nameGen = new NameGenerator(2, lotr)

export const characters = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CHARACTER':
      return [...state, {...action.character}]
    case 'REMOVE_CHARACTER':
      localforage.getItem('characters').then((characters) => {
        if (characters) {
          localforage.setItem('characters', characters.filter(character => character.id !== action.id))
            .then(newState => action.dispatch(stateFromCache(newState)))
        }
      })
      return state.filter((character) => character.id !== action.id)
    case 'INCREMENT_ATTRIBUTE':
      return incrementAttribute(state, action)
    case 'DECREMENT_ATTRIBUTE':
      return decrementAttribute(state, action)
    case 'INCREMENT_SKILL':
      return incrementSkill(state, action)
    case 'DECREMENT_SKILL':
      return decrementSkill(state, action)
    case 'BUY_DIE':
    let map
      switch (action.dieType) {
        case ATTRIBUTE_DIE:
          map = (character) => {
            if (action.id === character.id &&
                character.dicePool < PIPS_IN_DIE * MAX_ATTRIBUTE_DICE) {
              character = {...character, 
                creationPoints: character.creationPoints - ATTRIBUTE_DIE_COSTS,
                dicePool: character.dicePool + PIPS_IN_DIE
              }
            } 
            return character
          }
          break;
        case SKILL_DIE:
          map = (character) => {
            if (action.id === character.id &&
                character.skillDicePool < PIPS_IN_DIE * MAX_TOTAL_SKILL_DICE) {
              character = {...character, 
                creationPoints: character.creationPoints - SKILL_DIE_COSTS,
                skillDicePool: character.skillDicePool + PIPS_IN_DIE
              }
            } 
            return character
          }
          break;
      }
      return state.map(map)
    case 'ADD_SKILL':
      return addSkill(state, action)
    case 'CHANGE_NAME':
      return state.map((character) => 
      (action.characterId === character.id) ? {...character, name: action.name} : character)
    case 'CHANGE_PROPERTY':
      return state.map(
        (character) => {
          if (action.characterId === character.id) {
            let newCharacter = {...character}
            newCharacter[action.property] = action.newValue
            return newCharacter
          } else {
            return character
          }
        }
      )
    case 'EXPORT_TO_JSON':
      let json = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(state.reduce((prevCharacter, thisCharacter) => (thisCharacter.id === action.characterId) ? thisCharacter : prevCharacter)))}`
      window.open(json, '_blank')
      return state
    case 'SAVE':
      localforage.setItem('characters', state)
        .catch((err) => console.error('Something went wrong', err))
      return state
    case 'LOAD':
      localforage.getItem('characters').then((characters) => {
        if (characters) {
          action.dispatch(stateFromCache(characters))
        }
      })
      return state
    case 'STATE_FROM_CACHE':
      return action.state
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