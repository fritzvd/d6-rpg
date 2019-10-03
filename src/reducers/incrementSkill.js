import {MAX_SKILL_DICE } from '../helpers/constants'

const incrementSkill = (state, action) => {
  let newState = state.map(character => {
    if (action.characterId === character.id) {
      let skillDicePool = character.skillDicePool
      let skills = character.skills.map(skill => {
      if (skill.id === action.skillId &&
          skillDicePool > 0 &&
          skill.dicePoints < MAX_SKILL_DICE) {         // no more than 3 skill dice.
        skillDicePool = skillDicePool - 1;
        return {...skill, dicePoints: skill.dicePoints + 1}
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

export default incrementSkill