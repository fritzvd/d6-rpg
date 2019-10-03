import { connect } from 'react-redux'
import Overview from '../Overview/Overview'
import {setActiveCharacter} from '../../actions'

const getVisibleCharacters = (characters, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return characters
    case 'SHOW_COMPLETED':
      return characters.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return characters.filter(t => !t.completed)
    default:
      return characters
  }
}

const getCharacterIds = (characters) => {
  console.log(characters)
  return characters.map((character) => character.id)
}

const mapStateToProps = state => {
  return {
    characters: getVisibleCharacters(state.characters, state.visibilityFilter),
    characterIds: getCharacterIds(state.characters)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setActiveCharacter: (character) => {dispatch(setActiveCharacter(character))}
  }
}

const OverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview)

export default OverviewContainer