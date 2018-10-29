import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import QuestionList from './QuestionList.js'

function Home({ authedUser, location }){
	if(location.state !== "fromNav" || !authedUser){
      	return <Redirect to={{pathname:"/signin", state:"/"}}/>
	}

	return(
		<div>
			<QuestionList />
		</div>
	)
}

function mapStateToProps({ authedUser }){
  return{ authedUser }
}

export default connect(mapStateToProps)(Home);