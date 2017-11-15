import * as attributeTypes from '../data/attributeTypes.json'
import * as attributeTemplate from '../data/attributeTemplate.json'
import * as characterTemplate from '../data/characterTemplate.json'


const createCharacterTemplate = (type) => {
  let character = {...characterTemplate, age: Math.floor(Math.random() * 50)}

  character.attributes = attributeTypes[type].attributes.map((attribute, i) => {
    let newAtt = {...attributeTemplate, name: attribute, id: i, listOfSkills: attributeTypes[type].skills.filter((skill) => skill.attribute === attribute)}
    return newAtt
  })
  return character
}

export default createCharacterTemplate