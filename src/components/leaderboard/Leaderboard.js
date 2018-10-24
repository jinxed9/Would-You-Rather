import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import LeaderboardCard from './LeaderboardCard.js'

class Leaderboard extends Component{
	render(){
		const { rankedUsers , authedUser, location } = this.props

		if(location.state !== "fromNav" || !authedUser){
      		return <Redirect to={{pathname:"/signin", state:"/leaderboard"}}/>
    	}

		return(
			<div>
				<ol>
					{rankedUsers.map((user,index) => (
							<LeaderboardCard key={user.id} user={user} rank={index}/>
					))}	
				</ol>
			</div>
		)
	}
}

function mapStateToProps( {users, authedUser} ){
	//compute scores and rank
	const rankedUsers = Object.values(users)
	
	rankedUsers.forEach((user) => {
		const numAns = Object.keys(user.answers).length
		user.score = numAns + user.questions.length
	})

	rankedUsers.sort( (a,b) => (b.score - a.score) )

	return {
		rankedUsers,
		authedUser
	}
}

export default connect(mapStateToProps)(Leaderboard);