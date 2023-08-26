import { useState } from 'react'
import './App.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BasicTabs from './components/Tabs';
import BasicMenu from './components/Menu';
import {CharacterProvider} from './contexts/CharactersContext';

function App() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CharacterProvider>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Old School Essential Character
            </Typography>
            <BasicMenu />
          </Toolbar>
        </AppBar>
        <BasicTabs />
      </CharacterProvider>
    </Box>
  )
}

export default App

