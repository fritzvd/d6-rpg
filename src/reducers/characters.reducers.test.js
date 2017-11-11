import d6App from './index'
import { createStore } from 'redux'

it('should return an emptlist at decks', () => {
  let store = createStore(d6-rpgApp)
  expect(store.getState().characters).toEqual([])
})