import createCharacterTemplate from './characterTemplate'
import localforage from 'localforage'
import * as constants from '../helpers/constants'

export const addCharacter = (character) => {
  return  {
    type: constants.ADD_CHARACTER,
    character: {...character}
  }
}

export const removeCharacter = (id) => (dispatch) => {
  localforage.getItem('characters').then((characters) => {
    if (characters) {
      localforage.setItem('characters', characters.filter(character => character.id !== id))
        .then(newState => dispatch(stateFromCache(newState)))
    }
  })

}

export const incrementAttribute = (attributeId, characterId) => {
  return {
    type: constants.INCREMENT_ATTRIBUTE,
    attributeId: attributeId,
    characterId: characterId
  }
}

export const decrementAttribute = (attributeId, characterId) => {
  return {
    type: constants.DECREMENT_ATTRIBUTE,
    attributeId: attributeId,
    characterId: characterId
  }
}

export const newCharacter = (id, type) => {
  return {
    type: constants.NEW_CHARACTER,
    character: {...createCharacterTemplate(type), id}
  }
}

export const changeName = (name, id) => {
  return {
    type: constants.CHANGE_NAME,
    name,
    id
  }
}

export const genName = () => {
  return {
    type: constants.GEN_NAME
  }
}

export const changeGameType = (name, id) => {
  return {
    type: constants.CHANGE_GAME_TYPE,
    name,
    id
  }
}

export const changeAge = (age, characterId) => {
  return {
    type: constants.CHANGE_AGE,
    age,
    characterId
  }
}

export const genOccupation = (occupation) => ({
  type: constants.GEN_OCCUPATION,
})

export const changeOccupation = (occupation) => ({
  type: constants.CHANGE_OCCUPATION,
  occupation
})

export const changeProperty = (newValue, property, characterId) => {
  return {
    type: constants.CHANGE_PROPERTY,
    characterId,
    property,
    newValue
  }
}

export const changeDescription = (description, characterId) => {
  return {
    type: constants.CHANGE_DESCRIPTION,
    description,
    characterId
  }
}

export const buyDie = (id, dieType) => {
  return {
    type: constants.BUY_DIE,
    id,
    dieType
  }
}


export const addSkill = (characterId, attributeId, skillNames) => {
  return {
    type: constants.ADD_SKILL,
    characterId,
    attributeId,
    skillNames
  }
}

export const decrementSkill = (skillId, characterId) => {
  return {
    type: constants.DECREMENT_SKILL,
    skillId,
    characterId
  }
}

export const incrementSkill = (skillId, characterId) => {
  return {
    type: constants.INCREMENT_SKILL,
    skillId,
    characterId
  }
}

export const exportToJSON = (characterId) => {
  return {
    type: constants.EXPORT_TO_JSON,
    characterId
  }
}

export const save = (character) => (dispatch) => {
  // return 
  return localforage.getItem('characters').then(characters => {
    localforage.setItem('characters', [...characters, character]).catch((err) => console.error('Something went wrong', err))
  })
}

export const load = () => (dispatch) => {
  return localforage.getItem('characters').then((characters) => {
      if (characters) {
        dispatch(stateFromCache(characters))
      }
    })
}


export const stateFromCache = (state) => {
  return {
    type: constants.STATE_FROM_CACHE,
    state
  }
}

export const setActiveCharacter = (character) => ({
  type: constants.SET_ACTIVE_CHARACTER,
  character
})