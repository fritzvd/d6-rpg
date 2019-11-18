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

const calcDice = (attributes, attributeId, change) => {
  return attributes.map(attribute => {
    if (attribute.id === attributeId) {
      const pips = attribute.dicePoints % 3
      return {...attribute, dicePoints: Math.floor(change * 3) + pips }
    }
    return attribute
  })
}

const calcPips = (attributes, attributeId, change) => {
  return attributes.map(attribute => {
    if (attribute.id === attributeId) {
      let pipchange = ((parseInt(change) >= 2) ? 2 : parseInt(change))
      pipchange = (isNaN(pipchange) ? 0 : pipchange)
      return {...attribute, dicePoints: Math.floor(attribute.dicePoints /3 ) * 3 + pipchange}
    }
    return attribute
  })
}

const calculateCreationPoints = (character, attributes) => {
  let creationPoints = character.creationPoints
  let oldDicePoints = character.attributes.reduce((prev, curr) => {
    return prev + curr.dicePoints
  }, 0)

  let newDicePoints = attributes.reduce((prev, curr) => {
    return prev + curr.dicePoints
  }, 0)

  creationPoints = creationPoints - (newDicePoints - oldDicePoints)

  return creationPoints
}

export const changeAttribute = (character, attributeId, change) => dispatch => {
  const attributes = calcDice(character.attributes, attributeId, change)
  const creationPoints = calculateCreationPoints(character, attributes)
  dispatch(changeAttributeAction(attributes, creationPoints))
}

export const changeAttributeAction = (attributes, creationPoints) => ({
  type: constants.CHANGE_ATTRIBUTE,
  payload: {
    attributes,
    creationPoints
  }
})

export const changeAttributePips = (character, attributeId, change) => dispatch => {
  const attributes = calcPips(character.attributes, attributeId, change)
  const creationPoints = calculateCreationPoints(character, attributes)
  dispatch(changeAttributeAction(attributes, creationPoints))
}

export const incrementAttribute = (attributeId, characterId, dicePoints) => {
  return {
    type: constants.INCREMENT_ATTRIBUTE,
    attributeId: attributeId,
    characterId: characterId,
    dicePoints
  }
}

export const decrementAttribute = (attributeId, characterId, dicePoints) => {
  return {
    type: constants.DECREMENT_ATTRIBUTE,
    attributeId: attributeId,
    characterId: characterId,
    dicePoints
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

export const addSkillAtCreation  = (skill) => ({
  skill,
  type: constants.ADD_SKILL
})

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
  console.log(character)
  return localforage.getItem('characters').then(characters => {
    console.log("saving", character)
    localforage.setItem('characters', [...characters, character])
  }).catch((err) => {
    localforage.setItem('characters', [character])
    console.error('Something went wrong', err)
  }
  )
}

export const load = () => (dispatch) => {
  return localforage.getItem('characters').then((characters) => {
      if (characters) {
        let chars = characters.filter(char => (!!char))
        dispatch(stateFromCache(chars))
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