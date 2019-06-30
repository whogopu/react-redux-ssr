import React from 'react'
import { Route } from 'react-router-dom';
import Home from './Home'
import UsersList, { loadData } from './UsersList'

export default  [
	{
		path: '/',
		component: Home,
		exact: true
	},
	{
		path: '/users',
		component: UsersList,
		loadData
	}
]