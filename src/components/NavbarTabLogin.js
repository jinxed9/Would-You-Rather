import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class NavbarTabLogin extends Component{

	render(){
		return(
			<Link to="/signin">
				<div className="navbar-loginout"> 
          			Login
            	</div>
            </Link>
		)
	}
}

export default connect()(NavbarTabLogin);