import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Avatar from '../Avatar'
import OptionResult from './OptionResult'
import QuestionInputs from './QuestionInputs'

class Question extends Component{
  render(){

    const { authedUser, users, questions, question_id, location } = this.props
    
    if(location.state !== "fromNav" || !authedUser){
      return <Redirect to={{pathname:"/signin", state:`/questions/${question_id}`}}/>
    }

    if(!(question_id in questions)){
      return <Redirect to="/404"/>
    }

    const question = questions[ question_id ]
    const { name } = users[ question.author ]
    const { optionOne, optionTwo } = question

    /* Check if the authed user has answered the question */
    let answered = false
    if(authedUser !== null){
      answered = (question_id in users[authedUser].answers)
    }

		return(
        <div className="question-container">
          <Avatar user={question.author} />
          <h3>{name} Asks:</h3>
          <h3>Would you rather ... </h3>
          { answered ?
            <div>
              <OptionResult thisOption={optionOne} otherOption={optionTwo} />
              <div> -- or -- </div>
              <OptionResult thisOption={optionTwo} otherOption={optionOne} />
            </div>
            :
            <div>
              <QuestionInputs question={question} />
            </div>
        }
        </div>
		)
	}
}

function mapStateToProps( {authedUser, users, questions}, props ){
  const { question_id } = props.match.params
  return {authedUser,users,questions,question_id}
}

export default connect(mapStateToProps)(Question);