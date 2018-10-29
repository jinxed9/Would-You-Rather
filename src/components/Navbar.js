import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavbarTab from './NavbarTab.js'
import NavbarTabLogin from './NavbarTabLogin.js'
import NavbarTabLogout from './NavbarTabLogout.js'

function Navbar({ users, authedUser, location }) {
  return(
    <div className="navbar">
      <div>
        { authedUser === '' || authedUser === null ?
            <NavbarTabLogin />
          :
            <div>
              <NavbarTab url="/" index="1" 
                pageTitle="Home" 
                currUrl={location.pathname} />
              <NavbarTab url="/add" index="2"
                pageTitle="New Question" 
                currUrl={location.pathname} />
              <NavbarTab url="/leaderboard" index="3" 
                pageTitle="Leaderboard" 
                currUrl={location.pathname}/>
              <NavbarTabLogout index="4" />
              <div className="navbar-username">
                {`Hello, ${users[authedUser].name}`}
              </div>
            </div>
        }
      </div>
    </div>
  )
}


function mapStateToProps( {users, authedUser} , props ){
  const { location } = props
  return{ users ,authedUser, location }
}

export default withRouter(connect(mapStateToProps)(Navbar));