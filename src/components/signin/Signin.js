import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import User from './User'
import { setAuthedUser } from '../../actions/authedUser'

class SignIn extends Component{
	state={
		userID: '',
		redirect: false,
		next:{
			pathname:"/",
			state:"fromNav"
		}
	}

	handleChange = (e) => {
		const userID = e.target.value
		this.setState(() => ({
			userID
		}))
	}


	handleSubmit = (e) => {
		e.preventDefault()
		const { dispatch, location } = this.props
		dispatch(setAuthedUser(this.state.userID))
		this.setState({redirect:true})
	 	console.log(location.state)
		
		if(location.state){
			this.setState({
				next:{
					pathname:location.state,
					state:"fromNav",
					}
			})	
		}
	}

	render(){

		if(this.state.redirect === true){
			return <Redirect to={this.state.next}/>
		}

		return(
			<div>
				<div 
					className="signin-header">
				Please login below:
				</div>
				<form  
					onSubmit={this.handleSubmit}>
					<select
						className="signin-dropdown"
						onChange={this.handleChange} 
						value={this.state.userID}>
						<option 
							value=''> 
							None 
						</option>
						{this.props.userIds.map((id) => (
							<User key={id} id={id}/>
						))}		
					</select>
					<div>
						<button 
							className={`button ${!this.state.userID?"disabled":""}`} 
							disabled={!this.state.userID} 
							type="submit">
							Sign In
						</button>
					</div>
				</form>	
			</div>
		)
	}
}

function mapStateToProps( {users} ) {
	return {
		userIds: Object.keys(users)
	}
}

export default connect(mapStateToProps) (SignIn);