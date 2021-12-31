import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';

const Schedule = () => (
	<>
		<Helmet>
			<title>Schedule</title>
		</Helmet>
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
				Schedule for FUN IT Day 2021!
			</Typography>
			<Typography color="textSecondary" variant="body1">
				14 January 2022
			</Typography>
		</Box>
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'flex-end',
				alignItems: 'center',
				paddingTop: 3
			}}
		>
			<Timeline position="alternate">
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>11AM Leave office</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>Release of Bingo Sheets!</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						OTOT Lunch &amp; Activities
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot color="warning" />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						4.45 PM Deadline for Group Submissions
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot color="warning" />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						5 PM (Zoom) Closing Speech and Announcing of Top Winners
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot color="success" />
					</TimelineSeparator>
					<TimelineContent> 5.30 PM Event Concludes</TimelineContent>
				</TimelineItem>
			</Timeline>
		</Box>
	</>
);

export default Schedule;
