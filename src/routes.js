import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import Account from './pages/Account';
import CustomerList from './pages/CustomerList';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import FoodList from './pages/FoodList';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Schedule from './pages/Schedule';
import EmailComms from './pages/EmailComms';
import GamePlay from './pages/GamePlay';
import Instructions from './pages/Instructions';
import Leaderboard from './pages/Leaderboard';

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
			{ path: 'account', element: <Account /> },
			{ path: 'customers', element: <CustomerList /> },
			{ path: 'dashboard', element: <Dashboard /> },
			{ path: 'dashboard layout', element: <DashboardLayout /> },

			{ path: 'settings', element: <Settings /> },
			{ path: '*', element: <Navigate to="/404" /> }
		]
	},
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{ path: 'login', element: <Login /> },
			{ path: 'register', element: <Register /> },
			{ path: '404', element: <NotFound /> },
			{ path: '/', element: <Navigate to="/app/publicity" /> },
			{ path: '*', element: <Navigate to="/404" /> }
		]
	}
];

export default routes;
