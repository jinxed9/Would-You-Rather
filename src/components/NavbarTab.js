import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavbarTab extends Component{
	render(){
		const { url, currUrl } = this.props

		const link = {
			pathname: url,
			state:"fromNav"
		}

		let active = ""
			if (url === currUrl)
				active="active"
		return(
			<Link to={link}>
				<div className={
					`navbar-tab ${active}`
					} tabIndex={this.props.index}> 
       				{this.props.pageTitle}
            	</div>
            </Link>
		)
	}
}

export default NavbarTab;