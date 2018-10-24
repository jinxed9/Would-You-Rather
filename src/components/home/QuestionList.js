import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import QuestionSummaryCard from './QuestionSummaryCard'
import QuestionTypeSelectorBar from './QuestionTypeSelectorBar'
import { connect } from 'react-redux'

class QuestionList extends Component{
	state={
		unanswered: true,
	}

	handleUnClick = (e) => {
		e.preventDefault()
		this.setState({unanswered: true})
	}

	handledAnsClick = (e) => {
		e.preventDefault()
		this.setState({unanswered: false})
	}

	render(){

		const { answered, unanswered, authedUser } = this.props
		
		if(authedUser === null || authedUser === ''){
			console.log("Redirect to login");
			return <Redirect to='/signin'/>
		}

		return(
			<div className="question-list-container2">
				<QuestionTypeSelectorBar unanswered={this.state.unanswered} handleUnansweredClick={this.handleUnClick} handleAnsweredClick={this.handledAnsClick}/>
				<ol className="question-list">
					{this.state.unanswered ? unanswered.map((question) => (
						<QuestionSummaryCard key={question.id} id={question.id} />
					))
					: answered.map((question) => (
						<QuestionSummaryCard key={question.id} id={question.id} />
					))
					}	
				</ol>
			</div>
		)
	}
}

function compare(a,b){
	if(a.timestamp < b.timestamp)
		return 1
	if(a.timestamp > b.timestamp)
		return -1
	return 0
}

function mapStateToProps({questions,authedUser,users}){
	const sorted = Object.values(questions).sort(compare)
	const user = users[authedUser]
	const unanswered = sorted.filter((question) => (!(question.id in user.answers)))
	const answered = sorted.filter((question) => (question.id in user.answers))

	return {
		authedUser,
		answered,
		unanswered,
	}
}

export default connect(mapStateToProps)(QuestionList);