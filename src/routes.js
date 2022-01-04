import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import NotFound from './pages/NotFound';
import FoodList from './pages/FoodList';
import Schedule from './pages/Schedule';
import EmailComms from './pages/EmailComms';
import GamePlay from './pages/GamePlay';
import Instructions from './pages/Instructions';
import Leaderboard from './pages/Leaderboard';
import { LoadTest } from './pages/LoadTest';

const routes = [
	{
		path: 'app',
		element: <DashboardLayout />,
		children: [
			{ path: 'publicity', element: <EmailComms /> },
			{ path: 'schedule', element: <Schedule /> },
			{ path: 'instructions', element: <Instructions /> },
			{ path: 'gameplay', element: <GamePlay /> },
			{ path: 'eat', element: <FoodList /> },
			{ path: 'leaderboard', element: <Leaderboard /> },
			{ path: '*', element: <Navigate to="/404" /> }
		]
	},
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{ path: '404', element: <NotFound /> },
			{ path: '/', element: <Navigate to="/app/publicity" /> },
			{ path: '*', element: <Navigate to="/404" /> },
			{
				path: 'loaderio-c2e1279bdca0ab383176b6d531742737',
				element: <LoadTest />
			}
		]
	}
];

export default routes;
