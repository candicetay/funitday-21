import { Helmet } from 'react-helmet';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import ProductListToolbar from '../components/product/ProductListToolbar';
import ProductCard from '../components/product/ProductCard';
import food from '../activities/food';

const FoodList = () => (
	<>
		<Helmet>
			<title>Bingo Snack List</title>
		</Helmet>
		<Box
			sx={{
				backgroundColor: 'background.default',
				minHeight: '100%',
				py: 3
			}}
		>
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
						Celebrate and keep Singapore&apos;s culinary heritage
						alive by feeding your team with these local treats!
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
		</Box>
	</>
);

export default FoodList;
