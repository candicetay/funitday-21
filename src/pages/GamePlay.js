import { Helmet } from 'react-helmet';
import { Box, Typography, Grid, Container } from '@material-ui/core';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import GamesCard from '../components/games/GamesCard';
import overallGames from '../instructions/overallGames';

function GamePlay() {
	const [zone, setZone] = useState('Generic');
	const handleChange = (event) => {
		setZone(event.target.value);
		// console.log(event.target.value);
		return zone;
	};
	return (
		<>
			<Helmet>
				<title>Game Play</title>
			</Helmet>
			<Container maxWidth={false}>
				<Box
					sx={{
						alignItems: 'center',
						display: 'flex',
						flexDirection: 'column',
						paddingTop: 3,
						backgroundColor: 'background.default'
					}}
				>
					<Typography color="textPrimary" gutterBottom variant="h3">
						All about Activities!
					</Typography>
					<Typography color="textSecondary" variant="body1">
						Activities are split into Generic (all zones) and Zone
						Specific
					</Typography>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'flex-end',
							paddingTop: 3
						}}
					>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">
								Zone for Activities
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={zone}
								label="Zone"
								onChange={handleChange}
							>
								<MenuItem value="Generic">
									Generic Zone
								</MenuItem>
								<MenuItem value="West">West Zone</MenuItem>
								<MenuItem value="North">North Zone</MenuItem>
								<MenuItem value="Central">
									Central Zone
								</MenuItem>
								<MenuItem value="East">East Zone</MenuItem>
								<MenuItem value="North-East">
									North-East Zone
								</MenuItem>
							</Select>
						</FormControl>
					</Box>
				</Box>
				<Box sx={{ pt: 3 }}>
					<Grid container spacing={3}>
						{overallGames
							.filter((game) => game.zone === zone)
							.map((game) => (
								<Grid item key={game.id} lg={4} md={6} xs={12}>
									<GamesCard game={game} />
								</Grid>
							))}
					</Grid>
				</Box>
			</Container>
		</>
	);
}

export default GamePlay;
