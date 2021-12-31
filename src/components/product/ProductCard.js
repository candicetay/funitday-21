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
import Restaurant from '@mui/icons-material/Restaurant';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	sizeAvatar: {
		height: theme.spacing(35),
		width: theme.spacing(35)
	}
}));

function ProductCard({ product, ...rest }) {
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
						alt="Product"
						src={product.media}
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
					{product.title}
				</Typography>
				<Typography align="center" color="textPrimary" variant="body1">
					{product.description}
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
							5 Points
						</Typography>
					</Grid>
					<Grid
						item
						sx={{
							alignItems: 'center',
							display: 'flex'
						}}
					>
						<Restaurant color="action" />
						<Typography
							color="textSecondary"
							display="inline"
							sx={{ pl: 1 }}
							variant="body2"
						>
							{product.totalDownloads} Eateries found
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</Card>
	);
}

ProductCard.propTypes = {
	product: PropTypes.object.isRequired
};

export default ProductCard;
