import {SKILL_DIE_COST, PIPS_IN_DIE} from '../helpers/constants'

const decrementSkill = (state, action) => {
  let newState = state.map(character => {
    if (action.characterId === character.id) {
      let creationPoints = character.creationPoints
      let skills = character.skills.map(skill => {
      if (skill.id === action.skillId &&
          skill.dicePoints > 0) {
        creationPoints = creationPoints + SKILL_DIE_COST;
        return {...skill, dicePoints: skill.dicePoints - PIPS_IN_DIE}
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