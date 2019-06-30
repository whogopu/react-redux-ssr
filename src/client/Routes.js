import React from 'react'
import { Route } from 'react-router-dom';
import Home from './containers/Home'
import UsersList from './containers/UsersList'

export default  [
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