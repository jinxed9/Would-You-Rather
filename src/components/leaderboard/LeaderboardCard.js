import React, { Component } from 'react'
import Avatar from '../Avatar'

class LeaderboardCard extends Component{
	render(){
    const {id, name, score, questions, answers } = this.props.user
    const { rank } = this.props
		return(
        <div className="leaderboardCard">
          <h2>{`#${rank+1}`}</h2>
          <Avatar user={id}/>
          <h1>{name}</h1>
          <div>
            <h4 className="cardLineItem">Questions Answered:</h4>
            <h4 className="cardLineItem">{Object.keys(answers).length}</h4>
          </div>
          <div>
            <h4 className="cardLineItem">Created Questions:</h4>
            <h4 className="cardLineItem">{questions.length}</h4>
          </div>
          <div>
            <h4 className="cardLineItem">Score:</h4>
            <h4 className="cardLineItem">{score}</h4>
          </div>  
        </div>
		)
	}
}

export default LeaderboardCard;