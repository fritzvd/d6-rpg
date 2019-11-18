import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Button, Box, Heading } from 'react-bulma-components'
import Icon from '../UI/Icon'
import aT from '../../data/attributeTypes'
import { save, addCharacter, addSkillAtCreation as addSkill } from '../../actions'
import Input from '../UI/Input'
import Attribute from './Attribute'

function AddSkill (props) {
  return (<Box onClick={props.onClick}>
    <Heading size={6}>{props.name} - {props.attribute}</Heading>
    <p>{props.description}</p>
  </Box>)
}

// function Skill (props) {
//   return (<Box>

//   </Box>)
// }

function Skills (props) {
  const [query, setQuery] = useState('')
  
  return <>
    <Button onClick={() => props.history.push('/character-creation/details')}>
      <Icon iconName="arrow-left"/><span>Back</span>
    </Button>

    {props.character.skills.sort((s1, s2) => s1.attributeId - s2.attributeId).map(skill => <Attribute key={skill.id} attribute={{...skill, dicePoints: skill.dicePoints + props.character.attributes.find(attr => attr.id === skill.id).dicePoints}}/>)}
    <Input
      value={query}
      placeholder="Search for skills..."
      label="Search for a specific skill"
      onChange={(e) => setQuery(e.target.value)}
    />
    <p>Add a skill by clicking on the skill</p>
    {props.skills
      .filter(skill => skill.name.toLowerCase().includes(query))
      .map(skill => <AddSkill key={skill.name} {...skill} onClick={() => props.addSkill(skill)} />)}
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
  console.log(state.activeCharacter)
  return {
    character: state.activeCharacter,
    gameType: state.gameType,
    skills: aT[state.gameType].skills.sort((a, b) => a.name - b.name)
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCharacter: (character) => dispatch(addCharacter(character)),
  save: (character) => dispatch(save(character)),
  addSkill: (skill) => dispatch(addSkill(skill))
})

export default connect(mapStateToProps, mapDispatchToProps)(Skills)