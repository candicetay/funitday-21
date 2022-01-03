import { Helmet } from 'react-helmet';
import { Box, Container, Typography } from '@material-ui/core';

const LoadTest = () => (
	<>
		<Helmet>
			<title>LoadTest</title>
		</Helmet>
		<Box
			sx={{
				backgroundColor: 'background.default',
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				justifyContent: 'center'
			}}
		>
			<Container maxWidth="md">
				<Typography align="center" color="textPrimary" variant="h1">
					Load Test loaderio-c2e1279bdca0ab383176b6d531742737
				</Typography>
				<Typography
					align="center"
					color="textPrimary"
					variant="subtitle2"
				>
					loaderio-c2e1279bdca0ab383176b6d531742737
				</Typography>
				<Box sx={{ textAlign: 'center' }}>
					<img
						alt="Under development"
						src="/static/images/undraw_page_not_found_su7k.svg"
						style={{
							marginTop: 50,
							display: 'inline-block',
							maxWidth: '100%',
							width: 560
						}}
					/>
				</Box>
			</Container>
		</Box>
	</>
);

export default LoadTest;
