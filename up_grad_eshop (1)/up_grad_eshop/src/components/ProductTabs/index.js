import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const tabs = [
  {value: 'all', label: 'ALL'},
  {value: 'apparel', label: 'APPAREL'},
  {value: 'electronics', label: 'ELECTRONICS'},
  {value: 'footwear', label: 'FOOTWEAR'},
  {value: 'personal', label: 'PERSONAL CARE'},
]
export default function ProductTabs() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      sx={{marginTop: 2 }}
    >
      {tabs.map(item => {
        return(
          <ToggleButton value={item.value}>{item.label}</ToggleButton>
        )
      })
      }
    </ToggleButtonGroup>
  );
}