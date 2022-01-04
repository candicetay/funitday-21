import PropTypes from 'prop-types';
import { Box, Card, CardContent, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	sizeAvatar: {
		height: theme.spacing(25),
		width: theme.spacing(25)
	}
}));

function InstructionsCard({ instructionsCategory, ...rest }) {
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
						alt="Instructions"
						src={instructionsCategory.media}
						variant="square"
						className={classes.sizeAvatar}
					/>
				</Box>
				<Typography
					align="center"
					color="textPrimary"
					gutterBottom
					variant="h3"
				>
					{instructionsCategory.title}
				</Typography>
				<Typography align="center" color="textPrimary" variant="body1">
					{instructionsCategory.description}
				</Typography>
			</CardContent>
			<Box sx={{ flexGrow: 1 }} />
		</Card>
	);
}

InstructionsCard.propTypes = {
	instructionsCategory: PropTypes.object.isRequired
};

export default InstructionsCard;
