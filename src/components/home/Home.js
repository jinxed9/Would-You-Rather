import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import QuestionList from './QuestionList.js'

class Home extends Component {
	render(){

		const { authedUser, location } = this.props

		if(location.state !== "fromNav" || !authedUser){
          	return <Redirect to={{pathname:"/signin", state:"/"}}/>
    	}

		return(
			<div>
				<QuestionList />
			</div>
		)
	}
}

function mapStateToProps({ authedUser }){
  return{ authedUser }
}

export default connect(mapStateToProps)(Home);