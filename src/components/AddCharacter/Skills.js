import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bulma-components'
import Icon from '../UI/Icon'
import aT from '../../data/attributeTypes'
import { save, addCharacter, addSkillAtCreation as addSkill } from '../../actions'


function Skills (props) {
  return <>
    <Button onClick={() => props.history.push('/character-creation/details')}>
      <Icon iconName="arrow-left"/><span>Back</span>
    </Button>

    {JSON.stringify(props.character.skills)}

    {props.skills.map(skill => <div onClick={() => props.addSkill(skill)}>{skill.name}</div>)}

    <Button onClick={() => {
      props.addCharacter(props.character)
      props.save(props.character)
      props.history.push('/')
      }}>
      <span>Next</span><Icon iconName="arrow-right"/>
    </Button> 
  </>
}

const mapStateToProps = (state) => {
  console.log(state.characters)
  return {
    character: state.activeCharacter,
    gameType: state.gameType,
    skills: aT[state.gameType].skills.sort((a, b) => a.name[0] < b.name[0])
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCharacter: (character) => dispatch(addCharacter(character)),
  save: (character) => dispatch(save(character)),
  addSkill: (skill) => dispatch(addSkill(skill))
})

export default connect(mapStateToProps, mapDispatchToProps)(Skills)