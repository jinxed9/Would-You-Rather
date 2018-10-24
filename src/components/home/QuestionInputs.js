import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handlePollResponse } from '../../actions/shared'

class QuestionInputs extends Component{
  	state={
    	optionChecked: ""
  	}

  	onOptionOneChanged = (e) => {
    	this.setState({
      		optionChecked: "optionOne"
    	})
  	}

  	onOptionTwoChanged = (e) => {
    	this.setState({
      		optionChecked: "optionTwo"
    	})
  	}

  	handleSubmit = (e) => {
    	e.preventDefault()

    	const { optionChecked } = this.state
    	const { dispatch, question } = this.props

    	dispatch(handlePollResponse( question, optionChecked ))
  	}

	render(){
		const { question } = this.props
		const disabled = this.state.optionChecked === ""

		return(
			<div>
			  <form onSubmit={this.handleSubmit}>
              <div>
                <input 
                	className="cardLineItem" 
                	type="radio" 
                    checked={this.state.optionChecked === "optionOne"}
                    onChange={this.onOptionOneChanged} />
                <p className="cardLineItem">
                	{question.optionOne.text}
                </p>
              </div>
              <div>
                <input 
                	className="cardLineItem" type="radio"
                    checked={this.state.optionChecked === "optionTwo"}
                    onChange={this.onOptionTwoChanged} />
                <p className="cardLineItem">
                	{question.optionTwo.text}
                </p>
              </div>
              <div className='wrapper'>
                <button
                  className={`button ${disabled?"disabled":""}`}
                  disabled={disabled}
                  type='submit'>
                  Submit 
                </button>
              </div>
            </form>
      		</div>
		)
	}
}


export default connect()(QuestionInputs);