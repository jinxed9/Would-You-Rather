import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class NavbarTabLogout extends Component{
	
	handleLogout = (e) => {
		e.preventDefault()
		const { dispatch } = this.props
		dispatch(setAuthedUser(''))
	}

	render(){
		return(
			<Link to="/signin">
				<div className="navbar-loginout" 
					tabIndex={this.props.index} 
					onClick={this.handleLogout}> 
          			Logout
            	</div>
            </Link>
		)
	}
}

export default connect()(NavbarTabLogout);