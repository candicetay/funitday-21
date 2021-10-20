import { styled } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { Box, Typography, Grid, Container } from '@material-ui/core';
import GamesCard from '../components/games/GamesCard';
import overallGames from '../instructions/overallGames';
import zoneGames from '../instructions/zoneGames';
import GamesToolbar from '../components/games/GamesToolbar';

const GamePlay = () => (
	<>
		<Helmet>
			<title>Game Play</title>
		</Helmet>
		<Container maxWidth={false}>
			<GamesToolbar />
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
					Activities are split into Zone specific and generic (all
					Zones)
				</Typography>
			</Box>
			<Box sx={{ pt: 3 }}>
				<Grid container spacing={3}>
					{overallGames.map((game) => (
						<Grid item key={game.id} lg={4} md={6} xs={12}>
							<GamesCard game={game} />
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	</>
);

export default GamePlay;
