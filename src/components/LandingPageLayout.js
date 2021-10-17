import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

const LandingPageLayoutRoot = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	display: 'flex',
	height: '100%',
	overflow: 'hidden',
	width: '100%'
}));

const LandingPageLayoutWrapper = styled('div')(({ theme }) => ({
	display: 'flex',
	flex: '1 1 auto',
	overflow: 'hidden',
	paddingTop: 64,
	[theme.breakpoints.up('lg')]: {
		paddingLeft: 256
	}
}));

const LandingPageLayoutContainer = styled('div')({
	display: 'flex',
	flex: '1 1 auto',
	overflow: 'hidden'
});

const LandingPageLayoutContent = styled('div')({
	flex: '1 1 auto',
	height: '100%',
	overflow: 'auto'
});

const LandingPageLayout = () => {
	const [isMobileNavOpen, setMobileNavOpen] = useState(false);

	return (
		<LandingPageLayoutRoot>
			<DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
			<DashboardSidebar
				onMobileClose={() => setMobileNavOpen(false)}
				openMobile={isMobileNavOpen}
			/>
			<LandingPageLayoutWrapper>
				<LandingPageLayoutContainer>
					<LandingPageLayoutContent>
						<Outlet />
					</LandingPageLayoutContent>
				</LandingPageLayoutContainer>
			</LandingPageLayoutWrapper>
		</LandingPageLayoutRoot>
	);
};

export default LandingPageLayout;
