import { connect } from 'react-redux'

import Character from '../Character/Character'

const mapStateToProps = state => {
  return {
    character: state.activeCharacter,
    json: (id) => `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(state.characters.reduce((prevCharacter, thisCharacter) => (thisCharacter.id === id) ? thisCharacter : prevCharacter, {})))}`
  }
}
const CharacterContainer = connect(
  mapStateToProps,
)(Character)

export default CharacterContainer