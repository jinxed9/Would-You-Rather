import React, { Component } from 'react'
import { connect } from 'react-redux'

class Avatar extends Component{
	render(){
    const { avatarURL, user } = this.props
		
		return(
			<div>
        <img 
            src={avatarURL}
            alt={`Avatar of ${user}`}
            className='avatar'
        />
      </div>
		)
	}
}

function mapStateToProps({ users }, { user }){
  const { avatarURL } = users[user]

  return{ avatarURL }
}

export default connect(mapStateToProps)(Avatar);