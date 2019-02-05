import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    const { dispatch, store } = this.props;

    dispatch(handleInitialData());

    console.log(store);
  }
  render() {
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
