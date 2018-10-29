import React from 'react'

function VoteCount({ votes }){
	return(
		<div>
        	<p>{`Vote Count: ${votes.length}`}</p>
  		</div>
	)
}


export default VoteCount;