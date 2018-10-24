import React, { Component } from 'react'

class YourVote extends Component{
	render(){
		const { enabled } = this.props
		const checkMarkURL = "https://www.freeiconspng.com/uploads/checkmark-png-26.png"
		
		return(
			<div>
				{ enabled ?
              		<div className="checkmark-container">
              			<div className="checkmark-header">Your Vote</div>
              			<img 
                			src={checkMarkURL}
                			alt={`Your Vote`}
                			className='checkmark-img'
              			/>
              		</div>
              	:
              		""
              	}
            </div>
		)
	}
}


export default YourVote;