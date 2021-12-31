import { Helmet } from 'react-helmet';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import IframeResizer from 'iframe-resizer-react';
import React, { useRef, useState } from 'react';

const Leaderboard = () => (
	<>
		<Helmet>
			<title>FAQ</title>
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
					Score Board
				</Typography>
				<Typography color="textSecondary" variant="body1">
					Live view of which team is winning!
				</Typography>
			</Box>
			<Box
				sx={{
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'column',
					paddingTop: 4
				}}
			>
				<IframeResizer
					log
					src="https://keepthescore.co/embed/pyxeqxrxgnr/"
					style={{ width: '1px', minWidth: '100%', height: '4000px' }}
				/>
			</Box>
		</Container>
	</>
);

export default Leaderboard;
