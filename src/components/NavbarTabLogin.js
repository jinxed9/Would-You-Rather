import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function NavbarTabLogin() {
	return(
		<Link to="/signin">
			<div className="navbar-loginout"> 
      			Login
        	</div>
        </Link>
	)	
}

export default connect()(NavbarTabLogin);