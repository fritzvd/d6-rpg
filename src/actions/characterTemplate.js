import * as attributeTypes from '../data/attributeTypes.json'
import * as attributeTemplate from '../data/attributeTemplate.json'
import * as characterTemplate from '../data/characterTemplate.json'


const createCharacterTemplate = (type) => {
  let character = Object.assign({}, {...characterTemplate, age: Math.floor(Math.random() * 50)})

  character.attributes = attributeTypes[type].attributes.map((attribute, i) => {
    let newAtt = Object.assign({}, {...attributeTemplate, name: attribute, id: i})
    return newAtt
  })
  return character 
}

export default createCharacterTemplate