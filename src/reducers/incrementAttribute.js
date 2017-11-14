const incrementAttribute = (newState, action) => {
  newState = newState.map((character) => {
    let changed = false    
    character.attributes = character.attributes.map((attribute) => {
      let newAttribute = {...attribute}
      if (
        attribute.id === action.attributeId &&
        character.dicePool > 0 &&
        attribute.maximumDicePoints > attribute.dicePoints
      ) {
        changed = true
        newAttribute = {...attribute, dicePoints: attribute.dicePoints + 1}
      }
      return newAttribute
    })
    if (changed) {
      return {...character, dicePool: character.dicePool - 1}
    } else {
      return character
    }
  })
  return newState
}

export default incrementAttribute