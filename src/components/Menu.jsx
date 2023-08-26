import * as React from 'react';
import { Button, Divider, ListItemIcon, ListItemText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Menu from '@mui/material/Menu';
import { CharacterContext } from '../contexts/CharactersContext';

export default function SimpleListMenu() {
    const { charactersContext, selectedCharacterIndexContext, selectedCharacterContext } = React.useContext(CharacterContext)
    const [characters, setCharacters] = charactersContext;
    const [selectedCharacterIndex, setSelectedCharacterIndex] = selectedCharacterIndexContext;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const options = characters.map(char => char.name)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedCharacterIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNewCharacter = () => {
        console.log('New Character')
        handleClose()
    }

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: 'white' }}
            >
                Change Character
            </Button>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                    style: {  
                        width: '12rem',  
                      }, 
                    dense: true,
                }}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        selected={index === selectedCharacterIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {option}
                    </MenuItem>
                ))}
                <Divider />
                <MenuItem onClick={(event) => handleNewCharacter()}>
                    <ListItemIcon>
                        <AddCircleOutlineIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>New Character</ListItemText>
                </MenuItem>
            </Menu>
        </div>
    );
}