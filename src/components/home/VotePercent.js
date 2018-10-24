import React, { Component } from 'react'

class VotePercent extends Component{
	render(){
    	const { thisOption, otherOption } = this.props
		return(
			<div>
            	<p>{`${thisOption.votes.length/(thisOption.votes.length+otherOption.votes.length)*100}%`}</p>
      		</div>
		)
	}
}


export default VotePercent;