import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPercentage } from '../utils/helpers';


const getVoteKeys = () => ['aVotes', 'bVotes', 'cVotes', 'dVotes'];

class Poll extends Component {
  handleAnswer = (answer) => {
    const { poll, authedUser } = this.props;
    this.answered = true;

    console.log('Add Answer: ', answer);
  }
  render() {
    if (this.props.poll === null) {
      return <p>This poll does not exist</p>
    }

    const { poll, vote, authorAvatar } = this.props;
    const totalVotes = getVoteKeys()
      .reduce((total, key) => total + poll[key].length, 0)

    return (
      <div className="pollContainer">
        <h1 className="question">{poll.question}</h1>
        <div className="poll-author">
          By <img src={authorAvatar} alt="author's avatar" />
        </div>
        <ul>
          {['aText', 'bText', 'cText', 'dText'].map((key) => {

            const count = poll[key[0] + 'Votes'].length

            return (
              <li
                onClick={() => {
                  if (vote === null && !this.answered) {
                    this.handleAnswer(key[0]);
                    console.log("Good")
                  }
                }}
                key={key}
                className={`option ${vote === key[0] ? 'chosen' : ''}`} >
                <span>{poll[key]}</span>
                {vote !== null && <span>{getPercentage(count, totalVotes)} ({count})</span>}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (
  { authedUser, polls, users },
  { match }
) => {
  const { id } = match.params;
  const poll = polls[id];

  if (!poll) {
    return {
      poll: null,
    }
  }

  const vote = getVoteKeys().reduce((vote, key) => {
    if (vote !== null) {
      return vote[0];
    }

    return poll[key].includes(authedUser)
      ? key
      : vote;
  }, null);

  console.log("Vote is ", vote);

  return {
    poll,
    vote,
    authedUser,
    authorAvatar: users[poll.author].avatarURL
  }
}

export default connect(mapStateToProps)(Poll);
