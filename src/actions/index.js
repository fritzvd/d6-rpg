
export const addCharacter = (character) => {
  return  {
    type: 'ADD_CHARACTER',
    character: {...character}
  }
}

export const changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name: name
  }
}

export const changeAttributeDice = (attribute, change) => {
  return {
    type: 'CHANGE_ATTRIBUTE',
    
  }
}