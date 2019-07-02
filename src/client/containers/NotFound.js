import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = ({ staticContext = {} }) => {

	staticContext.notFound = true

	return (
		<div>
			<h4>Oops, route not found</h4>
			<Link to="/">Go Home</Link>
		</div>
	)
}

export default {
	component: NotFound
}