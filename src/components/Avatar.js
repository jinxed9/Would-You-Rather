import React from 'react'
import { connect } from 'react-redux'

function Avatar({ avatarURL, user }) {
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

function mapStateToProps({ users }, { user }){
  const { avatarURL } = users[user]

  return{ avatarURL }
}

export default connect(mapStateToProps)(Avatar);

