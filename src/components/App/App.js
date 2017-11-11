import React from 'react'
import OverviewContainer from '../Overview/OverviewContainer'
import AddCharacter from '../AddCharacter/AddCharacter'
import './App.css'
import Grid from 'material-ui/Grid';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => {
  return (
    <Grid>
      <div className="App">
        <OverviewContainer />
        <AddCharacter />
      </div>
    </Grid>
  )
}

export default App;
