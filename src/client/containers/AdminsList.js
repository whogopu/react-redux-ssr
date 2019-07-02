import React from 'react'
import { connect } from 'react-redux'
import { fetchAdmins }from '../actions/index'
import requireAuth from '../components/hocs/requireAuth';

class AdminList extends React.Component {
	componentDidMount() {
		this.props.fetchAdmins()
	}

	renderUsers() {
		return this.props.users.map(user => <li key={user.id}>{user.name}</li>)
	}

	render() {
		return (
			<div>
				<h4>Here's the list of admins:</h4>
				<ul>{this.renderUsers()}</ul>
			</div>
		)
	}
}

function mapStateToProps(store) {
	return {
		users: store.admins
	}
}

// function mapDispatchToProps(dispatch) {
// 	return {
// 		fetchUsers: () => dispatch(fetchUsers())
// 	}
// }

const mapDispatchToProps = {
	fetchAdmins
}

function loadData(store) {
	return store.dispatch(fetchAdmins())
}

export default {
	loadData,
	component: connect(mapStateToProps, mapDispatchToProps)(requireAuth(AdminList))
}