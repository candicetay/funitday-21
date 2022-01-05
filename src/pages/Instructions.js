import { Helmet } from 'react-helmet';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import InstructionsCard from '../components/instructions/InstructionsCard';
import overallInstructions from '../instructions/overallInstructions';

const Instructions = () => (
	<>
		<Helmet>
			<title>Instructions + FAQ</title>
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
					Welcome to FUN IT Day 2021!
				</Typography>
				<Typography color="textSecondary" variant="body1">
					Key details and FAQ to get your team oriented!
				</Typography>
			</Box>
			<Box sx={{ pt: 3 }}>
				<Grid container spacing={3}>
					{overallInstructions.map((instructionsCategory) => (
						<Grid
							item
							key={instructionsCategory.id}
							lg={4}
							md={6}
							xs={12}
						>
							<InstructionsCard
								instructionsCategory={instructionsCategory}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
			{/* <Box
				sx={{
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'column',
					paddingTop: 3,
					backgroundColor: 'background.default'
				}}
			>
			</Box> */}
		</Container>
	</>
);

export default Instructions;
