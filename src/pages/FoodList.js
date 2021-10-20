import { Helmet } from 'react-helmet';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import ProductCard from '../components/product/ProductCard';
import food from '../instructions/food';

const FoodList = () => (
	<>
		<Helmet>
			<title>Bingo Snack List</title>
		</Helmet>

		<Container maxWidth={false}>
			<Box
				sx={{
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'column',
					paddingTop: 3
				}}
			>
				<Typography color="textPrimary" gutterBottom variant="h3">
					Yum - Snack Time!
				</Typography>
				<Typography color="textSecondary" variant="body1">
					Celebrate and keep Singapore&apos;s culinary heritage alive
					by feeding your team with these local treats!
				</Typography>
			</Box>
			<Box sx={{ pt: 3 }}>
				<Grid container spacing={3}>
					{food.map((product) => (
						<Grid item key={product.id} lg={4} md={6} xs={12}>
							<ProductCard product={product} />
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	</>
);

export default FoodList;
