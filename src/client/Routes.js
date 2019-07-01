
import Home from './containers/Home'
import UsersList from './containers/UsersList'
import App from './App';

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
			}
		]
	}
]