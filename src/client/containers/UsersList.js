import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers }from '../actions/index'

class UserList extends React.Component {
	componentDidMount() {
		this.props.fetchUsers()
	}

	renderUsers() {
		return this.props.users.map(user => <li key={user.id}>{user.name}</li>)
	}

	render() {
		return (
			<div>
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