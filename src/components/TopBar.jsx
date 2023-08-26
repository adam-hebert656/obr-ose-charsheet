import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BasicMenu from './Menu';
import { CharacterContext } from '../contexts/CharactersContext';

export default function TopBar() {
    const {selectedCharacterContext} = React.useContext(CharacterContext)
    const [selectedCharacter, setSelectedCharacter] = selectedCharacterContext;

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <div style={{flexGrow: 1}}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {selectedCharacter.name}
                    </Typography>
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
                        {selectedCharacter.class} {selectedCharacter.level}
                    </Typography>
                </div>
                <BasicMenu />
            </Toolbar>
        </AppBar>
    )
}