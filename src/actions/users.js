export const RECEIVE_USERS = 'RECEIVE_USERS'
export const LOGIN_USER = 'LOGIN_USER'
export const ADD_QUESTION_USER = 'ADD_QUESTION_USER'
export const ADD_ANSWER = 'ADD_ANSWER'

export function receiveUsers(users){
	return{
		type: RECEIVE_USERS,
		users,
		authedUser: ''
	}
}

export function addQuestionUser(question){
	return{
		type: ADD_QUESTION_USER,
		question,
	}
}

export function addAnswer(id,authedUser,vote){
	return{
		type: ADD_ANSWER,
		id,
		authedUser,
		vote,
	}
}