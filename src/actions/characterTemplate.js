import attributeTypes from '../data/attributeTypes.json'
import attributeTemplate from '../data/attributeTemplate.json'
import characterTemplate from '../data/characterTemplate.json'
import personality from '../data/personality-tables'

function random(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const generatePersonality = () => `A ${random(personality.physical)} ${random(personality.noun)} who is ${random(personality.hook)} and ${random(personality.adverb)} ${random(personality.attitude)}`

const occupations = [
  "Wizard",
  "Jedi",
  "Soldier",
  "Villain",
  "Scoundrel",
  "Rogue",
  "Ranger",
  "Fighter",
  "Barbarian",
  "Bard",
  "Noble",
  "Aes Sedai",
  "Cannon Fodder",
  "Mercenary",
  "Investigator",
  "Detective",
  "Lawful Citizen"
]

export const genOccupation = () => random(occupations)


const createCharacterTemplate = (type) => {
  let character = {
    ...characterTemplate,
    creationPoints: characterTemplate.creationPoints - (attributeTypes[type].attributes.length * 4),
    age: Math.floor(Math.random() * 50) + 10,
    genre: type,
    description: generatePersonality(),
    occupation: genOccupation()
  }

  character.attributes = attributeTypes[type].attributes.map((attribute, i) => {
    const magic = i !== attributeTypes[type].attributes.length - 1
    return {
      ...attributeTemplate,
      dicePoints: (magic ? attributeTemplate.minimumDicePoints : 0),
      name: attribute,
      id: i,
      listOfSkills: attributeTypes[type].skills
                      .filter((skill) => skill.attribute === attribute),
    }
  })
  return character
}

export default createCharacterTemplate