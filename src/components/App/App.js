import React from 'react'
import OverviewContainer from '../Overview/OverviewContainer'
import AddCharacter from '../AddCharacter/AddCharacter'
import './App.css'
import 'tachyons'

const App = () => {
  return (
      <div className="fl w-100 pa2 App">
        <OverviewContainer />
        <AddCharacter />
      </div>
  )
}

export default App;
