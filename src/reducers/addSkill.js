let id = 0
// const addSkill = (newState, action) => {
//   newState = newState.map((character) => {
//     character.skills = character.skills
//       .concat(action.skillNames
//         .map((skillName) => {
//           return {id: id++, name: skillName, attributeId: action.attributeId, dicePoints: 0} 
//         })
//       )
//     character.attributes = character.attributes.map((attribute) => {
//       let newAttribute = attribute
//       if (
//         attribute.id === action.attributeId &&
//         character.id === action.characterId
//       ) {
//         newAttribute = {
//           ...attribute,
//           skillIds: character.skills
//           .filter((skill) => skill.attributeId === attribute.id)
//           .map(skill => skill.id)
//         }
//       }
//       return newAttribute
//     })
//     return character
//   })

//   return newState
// }

const addSkill = (state, action) => {
  const attributeId = state.attributes.find(attribute => action.skill.attribute === attribute.name).id
  return {id: id++, name: action.skill.name, attributeId: attributeId, dicePoints: 0}

}

export default addSkill