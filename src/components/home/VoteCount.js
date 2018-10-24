import React, { Component } from 'react'

class VoteCount extends Component{
	render(){
    	const { votes } = this.props
		return(
			<div>
            	<p>{`Vote Count: ${votes.length}`}</p>
      		</div>
		)
	}
}


export default VoteCount;