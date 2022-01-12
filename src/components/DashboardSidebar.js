import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
	Avatar,
	Box,
	Button,
	Divider,
	Drawer,
	Hidden,
	List,
	Typography
} from '@material-ui/core';
import {
	AlertCircle as AlertCircleIcon,
	BarChart as BarChartIcon,
	Lock as LockIcon,
	Settings as SettingsIcon,
	User as UserIcon,
	UserPlus as UserPlusIcon,
	Users as UsersIcon,
	Clock as ScheduleIcon,
	Activity as ActivityIcon,
	Info as InfoIcon,
	CheckCircle as InstructionsIcon,
	Dribbble as GamesIcon,
	Coffee as CoffeeIcon,
	List as ListIcon
} from 'react-feather';
import NavItem from './NavItem';

const user = {
	avatar: '/static/images/FUN-IT-Infotech-Logo-1 4.png',
	jobTitle: 'FUN IT Day 2021 Committee',
	name: 'IT x TripAdvisor'
};

const items = [
	{
		href: '/app/schedule',
		icon: ScheduleIcon,
		title: 'Schedule'
	},
	{
		href: '/app/instructions',
		icon: InfoIcon,
		title: 'Instructions & FAQ'
	},
	{
		href: '/app/eat',
		icon: CoffeeIcon,
		title: 'Bingo - Snacks'
	},
	{
		href: '/app/gameplay',
		icon: GamesIcon,
		title: 'Bingo - Activities'
	},
	{
		href: '/app/leaderboard',
		icon: ListIcon,
		title: 'Leaderboard'
	},
	{
		href: '/app/publicity',
		icon: ActivityIcon,
		title: 'Comms'
	}
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
	const location = useLocation();

	useEffect(() => {
		if (openMobile && onMobileClose) {
			onMobileClose();
		}
	}, [location.pathname]);

	const content = (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%'
			}}
		>
			<Box
				sx={{
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'column',
					p: 2
				}}
			>
				<Avatar
					component={RouterLink}
					src={user.avatar}
					sx={{
						cursor: 'pointer',
						width: 64,
						height: 64
					}}
					to="/app/publicity"
				/>
				<Typography color="textPrimary" variant="h5">
					{user.name}
				</Typography>
				<Typography color="textSecondary" variant="body2">
					{user.jobTitle}
				</Typography>
			</Box>
			<Divider />
			<Box sx={{ p: 2, display: 'flex' }}>
				<List>
					{items.map((item) => (
						<NavItem
							href={item.href}
							key={item.title}
							title={item.title}
							icon={item.icon}
						/>
					))}
				</List>
			</Box>
			<Box sx={{ flexGrow: 1 }} />
			<Box
				sx={{
					backgroundColor: 'background.default',
					m: 2,
					p: 2
				}}
			>
				<Typography align="center" gutterBottom variant="h4">
					Feeling lost?
				</Typography>
				{/* <Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						pt: 2
					}}
				>
					<Button
						color="primary"
						component="a"
						href="https://t.me/kandice_kenot"
						variant="contained"
					>
						Telegram us!
					</Button>
				</Box> */}
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						pt: 2
					}}
				>
					<Button
						color="primary"
						component="a"
						href="https://keepthescore.co/board/kqdwxvxiyyr/"
						variant="contained"
					>
						Leaderboard URL
					</Button>
				</Box>
			</Box>
		</Box>
	);

	return (
		<>
			<Hidden lgUp>
				<Drawer
					anchor="left"
					onClose={onMobileClose}
					open={openMobile}
					variant="temporary"
					PaperProps={{
						sx: {
							width: 256
						}
					}}
				>
					{content}
				</Drawer>
			</Hidden>
			<Hidden lgDown>
				<Drawer
					anchor="left"
					open
					variant="persistent"
					PaperProps={{
						sx: {
							width: 256,
							top: 64,
							height: 'calc(100% - 64px)'
						}
					}}
				>
					{content}
				</Drawer>
			</Hidden>
		</>
	);
};

DashboardSidebar.propTypes = {
	onMobileClose: PropTypes.func,
	openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
	onMobileClose: () => {},
	openMobile: false
};

export default DashboardSidebar;
