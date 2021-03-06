import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import LoadingBar from 'react-redux-loading';
import AddPoll from './AddPoll';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <AddPoll />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);
