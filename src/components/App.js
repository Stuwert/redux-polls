import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }
  render() {
    const { loading } = this.props;

    return (
      <div>
        Starter Code.
      </div>
    )
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App);
