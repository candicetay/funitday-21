import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Toggle() {
	const [alignment, setAlignment] = React.useState('left');

	const handleAlignment = (event, newAlignment) => {
		setAlignment(newAlignment);
	};
	return (
		<ToggleButtonGroup
			color="primary"
			exclusive
			value={alignment}
			onChange={handleAlignment}
		>
			<ToggleButton value="generic">Activities</ToggleButton>
			<ToggleButton value="zonebased">
				Special - Zone Specific
			</ToggleButton>
		</ToggleButtonGroup>
	);
}
export default Toggle;
