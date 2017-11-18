const decrementSkill = (state, action) => {
  let newState = state.map(character => {
    if (action.characterId === character.id) {
      let creationPoints = character.creationPoints
      let skills = character.skills.map(skill => {
      if (skill.id === action.skillId &&
          skill.dicePoints > 0) {
        creationPoints = creationPoints + 1;
        return {...skill, dicePoints: skill.dicePoints - 1}
      } else {
        return skill
      }
    })
      return {...character, skills: skills, creationPoints: creationPoints}
    } else {
      return character
    }
  })
  return newState
}

export default decrementSkill