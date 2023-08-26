import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { CharacterContext } from '../contexts/CharactersContext';

export default function SimpleListMenu() {
    const {charactersContext, selectedCharacterIndexContext, selectedCharacterContext} = React.useContext(CharacterContext)
    const [characters, setCharacters] = charactersContext;
    const [selectedCharacterIndex, setSelectedCharacterIndex] = selectedCharacterIndexContext;
    const [selectedCharacter, setSelectedCharacter] = selectedCharacterContext;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const options = characters.map(char => char.name)

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedCharacterIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <List
                component="nav"
                aria-label="Device settings"
                sx={{ paddingY: 0, }}
            >
                <ListItemButton
                    id="lock-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-label="when device is locked"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickListItem}
                    sx={{ paddingY: 0, }}
                    alignItems='center'
                >
                    <ListItemText
                        primary={options[selectedCharacterIndex]}
                        secondary="Change Character"
                        sx={{ textAlign: 'center', }}
                    />
                </ListItemButton>
            </List>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
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
            </Menu>
        </div>
    );
}