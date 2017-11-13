const decrementAttribute = (newState, action) => {
  newState = newState.map((character) => {
    let changed = false
    character.attributes = character.attributes.map((attribute) => {
      let newAttribute = attribute
      if (
        attribute.id === action.attributeId &&
        attribute.dicePoints > 0 &&
        attribute.minimumDicePoints < attribute.dicePoints
      ) {
        changed = true
        newAttribute = {...attribute, dicePoints: attribute.dicePoints - 1}
      }
      return newAttribute
    })
    if (changed) {
      return {...character, creationPoints: character.creationPoints + 1}
    } else {
      return character
    }
  })

  return newState
}

export default decrementAttribute