import React from 'react'
import { connect } from 'react-redux'
import YourVote from './YourVote'
import VoteCount from './VoteCount'
import VotePercent from './VotePercent'

function OptionResult({ thisOption, otherOption, authedUser } ){
	return(
        <div className="option-container">
          <h4 className="cardLineItem">{`...${thisOption.text}`}</h4>
          <VoteCount votes={thisOption.votes} />
          <VotePercent thisOption={thisOption} otherOption={otherOption} />
          <YourVote enabled={thisOption.votes.includes(authedUser)}/>         
        </div>
	)
}


function mapStateToProps( {authedUser} ){
  return{ authedUser }
}

export default connect(mapStateToProps)(OptionResult);