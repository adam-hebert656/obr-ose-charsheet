import { createContext, useState, useMemo } from 'react';

export const CharacterContext = createContext();
export const CharacterProvider = (props) => {
    const [characters, setcharacters] = useState([{ name: "Adak", class: "Dwarf", hp: 10 }, { name: "Ibrahik", class: "Fighter", hp: 10 },]);
    const [selectedCharacterIndex, _setselectedCharacterIndex] = useState(0);
    const [selectedCharacter, setselectedCharacter] = useState(characters[0])

    function setselectedCharacterIndex(index) {
        setselectedCharacter(characters[index])
        _setselectedCharacterIndex(index)
    }

    return (
        <CharacterContext.Provider value={{
            charactersContext: [characters, setcharacters],
            selectedCharacterIndexContext: [selectedCharacterIndex, setselectedCharacterIndex],
            selectedCharacterContext: [selectedCharacter, setselectedCharacter]
        }}>
            {props.children}
        </CharacterContext.Provider>
    );
}