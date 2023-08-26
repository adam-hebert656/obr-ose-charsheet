import { useContext } from 'react'
import './App.css'
import BasicTabs from './components/Tabs';
import TopBar from './components/TopBar';
import { CharacterProvider } from './contexts/CharactersContext';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CharacterProvider>
        <TopBar />
        <BasicTabs />
      </CharacterProvider>
    </Box>
  )
}

export default App

