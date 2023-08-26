import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { CharacterContext } from '../contexts/CharactersContext';
import { Box } from '@mui/material';
import Attributes from './Attributes';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const {selectedCharacterContext} = React.useContext(CharacterContext)
  const [selectedCharacter, setSelectedCharacter] = selectedCharacterContext;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'white', px: '2rem' }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth" textColor="inherit">
          <Tab label="Attributes" {...a11yProps(0)} />
          <Tab label="Skills" {...a11yProps(1)} />
          <Tab label="Inventory" {...a11yProps(2)} />
          <Tab label="Spells" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Attributes character={selectedCharacter} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Four
      </CustomTabPanel>
    </Box>
  );
}