import { RECEIVE_USERS, ADD_QUESTION_USER, ADD_ANSWER } from '../actions/users'

export default function users (state = { } , action){
	switch(action.type){
		case RECEIVE_USERS : 
			return{
				...state,
				...action.users,
			}
		case ADD_QUESTION_USER :
			const { question } = action
			return {
				...state,
				[question.author]:{...state[question.author],
					questions:[...state[question.author].questions,question.id]

				}
			}
		case ADD_ANSWER : 
			const { id, authedUser, vote } = action
			return {
				...state,
				[authedUser]:{
					...state[authedUser],
					answers:{
						...state[authedUser].answers,
						[id]:vote
					}
				}
			}
		default : 
			return state
	}
}