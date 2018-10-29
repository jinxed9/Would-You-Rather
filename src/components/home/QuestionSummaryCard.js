import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function QuestionSummaryCard({ name, text, id }){
	const link = {
    pathname:`/questions/${ id }`, 
    state:"fromNav"
  }
  return(
      <div className="poll-summary-card">
        <h2>{ name } asks:</h2>
        <div>
        	<h4>Would you rather</h4>
        </div>
        <div>
          <h4 className="cardLineItem">...</h4>
          <h4 className="cardLineItem">{ text }</h4>
          <h4 className="cardLineItem">...</h4>
        </div>
        <Link to={ link }>
          <div className="view-poll">
            View Poll
          </div>
        </Link>
      </div>			
	)
}

function mapStateToProps( {users, questions} , {id} ){
  const question = questions[id]
  const name = users[question.author].name
  const text = question.optionOne.text

  return { name, text }
}

export default connect(mapStateToProps)(QuestionSummaryCard);