import { Box, Container, Grid, Typography, Divider } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import Image from 'material-ui-image';

const DashboardLayoutContainer = styled('div')({
	display: 'flex',
	flex: '1 1 auto',
	overflow: 'hidden'
});

const DashboardLayoutWrapper = styled('div')(({ theme }) => ({
	display: 'flex',
	flex: '1 1 auto',
	overflow: 'hidden',
	paddingTop: 10
}));

const DashboardLayoutContent = styled('div')({
	flex: '1 1 auto',
	overflow: 'auto'
});
const FeedLayoutContent = styled('div')({
	overflow: 'auto',
	display: 'flex',
	flexDirection: 'column',
	paddingLeft: 15,
	paddingRight: 15,
	position: 'relative',
	width: 'auto',
	height: 'auto',
	paddingTop: 30,
	maxWidth: '100%'
});

const EmailComms = () => (
	<>
		<Helmet>
			<title>Publicity</title>
		</Helmet>
		<Box
			sx={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
				paddingTop: 3
			}}
		>
			<Typography color="textPrimary" gutterBottom variant="h3">
				What&apos;s been brewing!
			</Typography>
			<Typography color="textSecondary" variant="body1">
				Brought to you by the communications team.
			</Typography>
		</Box>
		<DashboardLayoutWrapper>
			<DashboardLayoutContainer>
				<Divider />
				<DashboardLayoutContent>
					<FeedLayoutContent>
						<Image
							src="/static/images/publicity/Publicity - Eyes 04.png"
							alt="FUN IT Day Email Comms!"
							aspectRatio="0.71"
						/>
					</FeedLayoutContent>
					<FeedLayoutContent>
						<Image
							src="/static/images/publicity/Publicity - Gardens By The Bay.png"
							alt="FUN IT Day Email Comms!"
							aspectRatio="0.71"
						/>
					</FeedLayoutContent>
					<FeedLayoutContent>
						<Image
							src="/static/images/publicity/Email - Initial Comms.png"
							alt="FUN IT Day Email Comms!"
							aspectRatio="0.19"
						/>
					</FeedLayoutContent>
				</DashboardLayoutContent>
				<Divider />
			</DashboardLayoutContainer>
		</DashboardLayoutWrapper>
	</>
);

export default EmailComms;
