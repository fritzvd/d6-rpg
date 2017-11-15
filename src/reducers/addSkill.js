const addSkill = (newState, action) => {
  newState = newState.map((character) => {
    character.attributes = character.attributes.map((attribute) => {
      let newAttribute = attribute
      if (
        attribute.id === action.attributeId &&
        character.id === action.characterId
      ) {
        newAttribute = {...attribute, skills: attribute.skills.concat(action.skillNames)}
      }

      return newAttribute
    })
    return character
  })

  return newState
}

export default addSkill