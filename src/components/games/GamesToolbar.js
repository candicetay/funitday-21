import {
	Box,
	Button,
	Card,
	CardContent,
	TextField,
	InputAdornment,
	SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Toggle from './toggle';

export const GamesToolbar = (props) => (
	<Box {...props}>
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'flex-end',
				paddingTop: 3
			}}
		>
			<Toggle />
		</Box>
	</Box>
);

export function BasicSelect() {
	const [zone, setZone] = useState('Generic');
	const handleChange = (event) => {
	  setZone(event.target.value);
	  console.log(event.target.value);
	};
	return (
	  <Box
	  	sx={{
			display: 'flex',
			justifyContent: 'flex-end',
			paddingTop: 3
	}}>
		<FormControl fullWidth>
		  <InputLabel id="demo-simple-select-label">Zone for Activities</InputLabel>
		  <Select
			labelId="demo-simple-select-label"
			id="demo-simple-select"
			value={zone}
			label="Zone"
			onChange={handleChange}
		  >
			<MenuItem value="Generic">Generic Zone</MenuItem>
			<MenuItem value="West">West Zone</MenuItem>
			<MenuItem value="North">North Zone</MenuItem>
			<MenuItem value="Central">Central Zone</MenuItem>
			<MenuItem value="East">East Zone</MenuItem>
			<MenuItem value="North-East">North-East Zone</MenuItem>
		  </Select>
		</FormControl>
	  </Box>
	);
  }
