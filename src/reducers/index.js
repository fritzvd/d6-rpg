import { combineReducers } from 'redux'
import * as constants from '../helpers/constants'

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
    case constants.ADD_CHARACTER:
      return [...state, {...action.character}]
    case constants.REMOVE_CHARACTER:
      return state.filter((character) => character.id !== action.id)
    case constants.INCREMENT_ATTRIBUTE:
      return incrementAttribute(state, action)
    case constants.DECREMENT_ATTRIBUTE:
      return decrementAttribute(state, action)
    case constants.INCREMENT_SKILL:
      return incrementSkill(state, action)
    case constants.DECREMENT_SKILL:
      return decrementSkill(state, action)
    case constants.BUY_DIE:
    let mapFn
      switch (action.dieType) {
        case constants.ATTRIBUTE_DIE:
          mapFn = (character) => {
            if (action.id === character.id &&
                character.dicePool < constants.PIPS_IN_DIE * constants.MAX_ATTRIBUTE_DICE) {
              character = {...character, 
                creationPoints: character.creationPoints - constants.ATTRIBUTE_DIE_COSTS,
                dicePool: character.dicePool + constants.PIPS_IN_DIE
              }
            } 
            return character
          }
          break;
        case constants.SKILL_DIE:
          mapFn = (character) => {
            if (action.id === character.id &&
                character.skillDicePool < constants.PIPS_IN_DIE * constants.MAX_TOTAL_SKILL_DICE) {
              character = {...character, 
                creationPoints: character.creationPoints - constants.SKILL_DIE_COSTS,
                skillDicePool: character.skillDicePool + constants.PIPS_IN_DIE
              }
            } 
            return character
          }
          break;
      }
      return state.map(mapFn)
    case constants.ADD_SKILL:
      return addSkill(state, action)
    case constants.CHANGE_NAME:
      return state.map((character) => 
      (action.characterId === character.id) ? {...character, name: action.name} : character)
    case constants.CHANGE_PROPERTY:
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
    case constants.STATE_FROM_CACHE:
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
    case constants.SET_ACTIVE_CHARACTER:
      return action.character
    case constants.CHANGE_NAME:
      return {...state, name: action.name}
    case constants.GEN_NAME:
      return {...state, name: nameGen.newName()}
    case constants.CHANGE_AGE:
      return {...state, age: action.age}
    case constants.CHANGE_DESCRIPTION:
      return {...state, description: action.description}
    case constants.CHANGE_OCCUPATION:
      return {...state, occupation: action.occupation}
    case constants.CHANGE_PROPERTY:
      let newState = {...state}
      newState[action.property] = action.newValue
      return newState
    case constants.NEW_CHARACTER:
      return {...action.character, name: nameGen.newName()}
    case constants.CHANGE_GAME_TYPE:
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