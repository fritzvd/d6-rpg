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

export const newCharacter = (id) => {
  return {
    type: 'NEW_CHARACTER',
    character: {...createCharacterTemplate('generic'), id}
  }
}

export const changeName = (name, characterId) => {
  return {
    type: 'CHANGE_NAME',
    name,
    characterId
  }
}

export const changeAge = (age, characterId) => {
  return {
    type: 'CHANGE_AGE',
    age,
    characterId
  }
}

export const changeDescription = (description, characterId) => {
  return {
    type: 'CHANGE_DESCRIPTION',
    description,
    characterId
  }
}