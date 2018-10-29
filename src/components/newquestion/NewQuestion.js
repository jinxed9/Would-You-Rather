import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../../actions/shared'


class NewQuestion extends Component{
	 state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  }

  handleOptionChange = (e) => {
    const optionText = e.target.value
    const fromOption = e.target.placeholder

    if(fromOption === 'Option 1'){
      this.setState(() => ({
        optionOneText: optionText
      }))
    }
    if(fromOption === 'Option 2'){
      this.setState(() => ({
        optionTwoText: optionText
      }))
    }

  }


  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText, optionTwoText} = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion(optionOneText, optionTwoText))

    this.setState(() => ({
      toHome: true,
    })) 
  }

  render(){

    const { toHome , optionOneText , optionTwoText } = this.state
    const { authedUser, location } = this.props

    if(location.state !== "fromNav" || !authedUser){
          return <Redirect to={{pathname:"/signin", state:"/add"}}/>
    }
    

    if(toHome === true) {
      return <Redirect to={{pathname:"/", state:"fromNav"}} />
    }

  
    let disabled = (this.state.optionOneText === "" 
                  || this.state.optionTwoText === "")

		return(
        <div className="questionContainer">
          <form 
            className="NewQuestionForm" 
            onSubmit={this.handleSubmit}>
            <h1 className="new-question-header">
              Complete the Question:
            </h1>
            <h3>Would you rather ... </h3>
            <input 
              className="input-text"
              type="text" 
              placeholder="Option 1"
              onChange={ this.handleOptionChange } 
              value={ optionOneText }/>
            <h3>-- or -- </h3>
            <input
              className="input-text" 
              type="text" 
              placeholder="Option 2" 
              onChange={ this.handleOptionChange }
              value={ optionTwoText }/>
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

function mapStateToProps({ authedUser }){
  return{ authedUser }
}

export default connect(mapStateToProps)(NewQuestion);