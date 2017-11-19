import createCharacterTemplate from './characterTemplate'

export const addCharacter = (character) => {
  return  {
    type: 'ADD_CHARACTER',
    character: {...character}
  }
}

export const removeCharacter = id => {
  return  {
    type: 'REMOVE_CHARACTER',
    id: id
  }
}

export const incrementAttribute = (attributeId, characterId) => {
  return {
    type: 'INCREMENT_ATTRIBUTE',
    attributeId: attributeId,
    characterId: characterId
  }
}

export const decrementAttribute = (attributeId, characterId) => {
  return {
    type: 'DECREMENT_ATTRIBUTE',
    attributeId: attributeId,
    characterId: characterId
  }
}

export const newCharacter = (id, type) => {
  return {
    type: 'NEW_CHARACTER',
    character: {...createCharacterTemplate(type), id}
  }
}

export const changeName = (name, id) => {
  return {
    type: 'CHANGE_NAME',
    name,
    id
  }
}

export const changeGameType = (name, id) => {
  return {
    type: 'CHANGE_GAME_TYPE',
    name,
    id
  }
}

export const changeAge = (age, characterId) => {
  return {
    type: 'CHANGE_AGE',
    age,
    characterId
  }
}

export const changeProperty = (newValue, property, characterId) => {
  return {
    type: 'CHANGE_PROPERTY',
    characterId,
    property,
    newValue
  }
}

export const changeDescription = (description, characterId) => {
  return {
    type: 'CHANGE_DESCRIPTION',
    description,
    characterId
  }
}

export const buyAttributeDie = (id) => {
  return {
    type: 'BUY_ATTRIBUTE_DIE',
    id
  }
}

export const addSkill = (characterId, attributeId, skillNames) => {
  return {
    type: 'ADD_SKILL',
    characterId,
    attributeId,
    skillNames
  }
}

export const decrementSkill = (skillId, characterId) => {
  return {
    type: 'DECREMENT_SKILL',
    skillId,
    characterId
  }
}

export const incrementSkill = (skillId, characterId) => {
  return {
    type: 'INCREMENT_SKILL',
    skillId,
    characterId
  }
}

export const exportToJSON = (characterId) => {
  return {
    type: 'EXPORT_TO_JSON',
    characterId
  }
}