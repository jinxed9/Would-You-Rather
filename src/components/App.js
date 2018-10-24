import React, { Component } from 'react';
import Navbar from './Navbar'
import { Route, withRouter, Switch } from 'react-router-dom'
import NewQuestion from './newquestion/NewQuestion'
import Leaderboard from './leaderboard/Leaderboard'
import FourOFour from './404/FourOFour'
import Home from './home/Home'
import Question from './home/Question'
import SignIn from './signin/Signin'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        <div>
          <Navbar/>
          <LoadingBar/>
          {this.props.loading === false ? 
            null
            :
            <div>
              <Switch>
                <Route exact path='/add' component={NewQuestion} />
                <Route exact path='/leaderboard' component={Leaderboard} />
                <Route exact path='/' component={Home} />
                <Route path='/questions/:question_id' component={Question} />
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/404' component={FourOFour} />
                <Route component={FourOFour} />
              </Switch>
            </div>
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps({ loadingBar }){
console.log(loadingBar)
return{ 
  loading: loadingBar.default === 0
   }
}

export default withRouter(connect(mapStateToProps)(App));