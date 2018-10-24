import { getInitialData, saveQuestion } from '../util/api'
import { receiveUsers, addQuestionUser, addAnswer } from '../actions/users'
import { receiveQuestions, addQuestion, addVote } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData(){
	return(dispatch) => {
		dispatch(showLoading())
		return getInitialData()
			.then(({ users,questions }) => {
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
				dispatch(hideLoading())
			})
	}
}

export function handleAddQuestion(optionOneText,optionTwoText){
	return(dispatch,getState) => {
		const { authedUser } = getState()

		return saveQuestion({
			optionOneText,
			optionTwoText,
			author:authedUser,
		})
		.then((question) => {
			dispatch(addQuestionUser(question))
			dispatch(addQuestion(question))
		})
	}
}

export function handlePollResponse(question,vote){
	return (dispatch,getState) => {
		const { authedUser } = getState()

		//Not sure if this should be done here, or in the reducer
		question[vote].votes = [...question[vote].votes,authedUser]

		console.log(question)
		dispatch(addVote(question))
		dispatch(addAnswer(question.id,authedUser,vote))
	}
}