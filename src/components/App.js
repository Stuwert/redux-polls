import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import loadingBar, { LoadingBar } from 'react-redux-loading';


class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }
  render() {
    const { loading } = this.props;

    return (
      <div>
        <LoadingBar />
        {this.props.loading === true
          ? <div>We're loading</div>
          : <Dashboard />
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
