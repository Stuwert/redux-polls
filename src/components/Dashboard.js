import React, { Component } from 'react';
import { connect } from 'react-redux';

const PollList = ({ polls }) => (
  <ul>
    {polls.map((poll) => (
      <li key={poll.id}>
        {poll.question}
      </li>
    ))}
  </ul>
)

class Dashboard extends Component {
  state = {
    showAnswered: false
  }
  showUnanswered = () => {
    this.setState(() => ({
      showAnswered: false,
    }))
  }
  showAnswered = () => (
    this.setState(() => ({
      showAnswered: true,
    }))
  )
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { showAnswered } = this.state;

    const list = showAnswered ? this.props.answered : this.props.unanswered;

    return (
      <div>
        <div className="dashboard">
          <button
            style={{ textDecoration: showAnswered === false ? 'underline' : null }}
            onClick={this.showUnanswered}
          >
            Unanswered
          </button>
          <button
            style={{ textDecoration: showAnswered === true ? 'underline' : null }}
            onClick={this.showAnswered}
          >
            Answered
          </button>

        </div>
        <PollList polls={list} />
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser, polls, users }) => {
  let answers = [];

  if (users[authedUser]) {
    answers = users[authedUser].answers;
  }

  const answered = answers.map((id) => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  const unanswered = Object.keys(polls)
    .filter((id) => !answers.includes(id))
    .map((id) => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    answered,
    unanswered,
  }
}

export default connect(mapStateToProps)(Dashboard);

