import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component{
	render(){
		const {id,name} = this.props;
		return(
				<option value={id}> {name} </option>
		)
	}
}

function mapStateToProps({users},{id}){
	const name = users[id].name
	return{
		id,
		name,
	}
}

export default connect(mapStateToProps)(User);