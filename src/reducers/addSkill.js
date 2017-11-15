let id = 0
const addSkill = (newState, action) => {
  newState = newState.map((character) => {
    character.skills = character.skills
      .concat(action.skillNames
        .map((skillName) => {
          return {id: id++, name: skillName} 
        })
      )
    character.attributes = character.attributes.map((attribute) => {
      let newAttribute = attribute
      if (
        attribute.id === action.attributeId &&
        character.id === action.characterId
      ) {
        newAttribute = {...attribute, skillIds: attribute.skillIds.concat(character.skills.map((skill) => skill.id))}
      }
      return newAttribute
    })
    console.log(character.skills)
    return character
  })

  return newState
}

export default addSkill