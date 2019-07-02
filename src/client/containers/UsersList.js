import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers }from '../actions/index'
import { Helmet }from 'react-helmet'

class UserList extends React.Component {
	componentDidMount() {
		this.props.fetchUsers()
	}

	renderUsers() {
		return this.props.users.map(user => <li key={user.id}>{user.name}</li>)
	}

	head(){
		return (
			<Helmet>
					<title>{`${this.props.users.length} Users`}</title>
					<meta property="og:title" content="Users List"></meta>
			</Helmet>
		)
	}

	render() {
		return (
			<div>
				{this.head()}
				Here's the list of users:
				<ul>{this.renderUsers()}</ul>
			</div>
		)
	}
}

function mapStateToProps(store) {
	return {
		users: store.users
	}
}

// function mapDispatchToProps(dispatch) {
// 	return {
// 		fetchUsers: () => dispatch(fetchUsers())
// 	}
// }

const mapDispatchToProps = {
	fetchUsers
}

function loadData(store) {
	return store.dispatch(fetchUsers())
}

export default {
	loadData,
	component: connect(mapStateToProps, mapDispatchToProps)(UserList)
}