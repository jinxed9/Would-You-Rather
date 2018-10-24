import React, { Component } from 'react'

class QuestionTypeSelectorBar extends Component{
	state={
		unanswered: true,
	}

	render(){
		const dark = "question-list-container-button-dark"
		const light = "question-list-container-button-light"

		return(
			<div>
				<div 
					onClick={this.props.handleUnansweredClick} 
					className={this.props.unanswered?dark:light}>
						Unanswered Questions
				</div>
				<div 
					onClick={this.props.handleAnsweredClick} 
					className={this.props.unanswered?light:dark}>
						Answered Questions
				</div>
			</div>
		)
	}
}

export default QuestionTypeSelectorBar;