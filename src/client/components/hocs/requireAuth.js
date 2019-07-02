import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

export default ChildComponent => {
	class RequireAuth extends Component {
		render(){

			const { auth, ...rest } = this.props

			switch (auth) {
				case false:
					return <Redirect to="/" />
				case null:
					return <div>Loading...</div>
				default:
					return <ChildComponent {...rest} />
			}
		}
	}

	function mapStateToProps({auth}) {
		return { auth }
	}

	return connect(mapStateToProps)(RequireAuth)
}