import React from 'react'
import { connect } from 'react-redux'

function User({ id, name }){
	return(
		<option value={id}> {name} </option>
	)
	
}

function mapStateToProps({users},{id}){
	const name = users[id].name
	return{
		id,
		name,
	}
}

export default connect(mapStateToProps)(User);