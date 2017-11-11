import { combineReducers } from 'redux'

const characters = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CHARACTER':
      return [...state, action.character]
    default:
      return state
  }
}

const d6App = combineReducers({
  characters
})

export default d6App