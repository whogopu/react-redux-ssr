
import Home from './containers/Home'
import UsersList from './containers/UsersList'
import App from './App';
import NotFound from './containers/NotFound';
import AdminsList from './containers/AdminsList'

export default  [
	{
		...App,
		routes: [
			{
				...Home,
				path: '/',
				exact: true
			},
			{
				...UsersList,
				path: '/users'
			},
			{
				...AdminsList,
				path: '/admins'
			},
			{
				...NotFound
			}
		]
	}
]