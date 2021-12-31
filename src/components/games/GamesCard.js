import PropTypes from 'prop-types';
import {
	Avatar,
	Box,
	Card,
	CardContent,
	Divider,
	Grid,
	Typography
} from '@material-ui/core';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	sizeAvatar: {
		height: theme.spacing(35),
		width: theme.spacing(35)
	}
}));

function GamesCard({ game, ...rest }) {
	const classes = useStyles();
	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%'
			}}
			{...rest}
		>
			<CardContent>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						pb: 3
					}}
				>
					<Avatar
						alt="Game"
						src={game.media}
						variant="square"
						className={classes.sizeAvatar}
					/>
				</Box>
				<Typography
					align="center"
					color="textPrimary"
					gutterBottom
					variant="h4"
				>
					{game.title}
				</Typography>
				<Typography align="center" color="textPrimary" variant="body1">
					{game.description}
				</Typography>
			</CardContent>
			<Box sx={{ flexGrow: 1 }} />
			<Divider />
			<Box sx={{ p: 2 }}>
				<Grid
					container
					spacing={2}
					sx={{ justifyContent: 'space-between' }}
				>
					<Grid
						item
						sx={{
							alignItems: 'center',
							display: 'flex'
						}}
					>
						<CalculateOutlinedIcon color="action" />
						<Typography
							color="textSecondary"
							display="inline"
							sx={{ pl: 1 }}
							variant="body2"
						>
							{game.totalDownloads} Points
						</Typography>
					</Grid>
					<Grid
						item
						sx={{
							alignItems: 'center',
							display: 'flex'
						}}
					>
						<MapOutlinedIcon color="action" />
						<Typography
							color="textSecondary"
							display="inline"
							sx={{ pl: 1 }}
							variant="body2"
						>
							{game.zone} Zone
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</Card>
	);
}

GamesCard.propTypes = {
	game: PropTypes.object.isRequired
};

export default GamesCard;
