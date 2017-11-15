import { characters, activeCharacter } from './index'

it('should return an empty list of characters', () => {
  expect(characters([], {})).toEqual([])
})

it('should return a new character', () => {
  expect(characters([], {
    type: 'ADD_CHARACTER',
    character: activeCharacter({}, {
        type: 'CHANGE_GAME_TYPE',
        name: 'fantasy'
      })
    })[0]).toBeTruthy()
})
