import {SKILL_DIE_COSTS } from '../helpers/constants'

const decrementSkill = (state, action) => {
  let newState = state.map(character => {
    if (action.characterId === character.id) {
      let skillDicePool = character.skillDicePool
      let skills = character.skills.map(skill => {
      if (skill.id === action.skillId &&
          skill.dicePoints > 0) {
        skillDicePool = skillDicePool + SKILL_DIE_COSTS;
        return {...skill, dicePoints: skill.dicePoints - 1}
      } else {
        return skill
      }
    })
      return {...character, skills: skills, skillDicePool: skillDicePool}
    } else {
      return character
    }
  })
  return newState
}

export default decrementSkill