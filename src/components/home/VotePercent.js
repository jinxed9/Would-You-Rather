import React from 'react'

function VotePercent({ thisOption, otherOption }){
	return(
		<div>
        	<p>{`${thisOption.votes.length/(thisOption.votes.length+otherOption.votes.length)*100}%`}</p>
  		</div>
	)
}


export default VotePercent;