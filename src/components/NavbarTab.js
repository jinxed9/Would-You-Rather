import React from 'react'
import { Link } from 'react-router-dom'

function NavbarTab({ url, currUrl, index, pageTitle }) {
	const link = {
		pathname: url,
		state:"fromNav"
	}

	let active = ""
		if (url === currUrl)
			active="active"

	return (
		<Link to={link}>
			<div 
				className={`navbar-tab ${active}`}
				tabIndex={index}> 
   				{pageTitle}
        	</div>
        </Link>
	)
}

export default NavbarTab;