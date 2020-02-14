import React, { Component } from 'react';
import { HeaderBar } from '../HeaderBar';
import './styles.scss';

const getApiUrl = () => {
  const API_BASE_URL = 'https://opentdb.com/api.php';
  const params = Object.entries({
    amount: 3,
    category: 9,
    difficulty: 'easy',
    type: 'multiple'
  })
    .map(([key, value], i) => `${i === 0 ? '?' : '&'}${key}=${value}`)
    .join('');

  return `${API_BASE_URL}${params}`;
};

class GameScreen extends Component {
  state = {
    questions: [],
    questionsAnswered: [],
    loading: false,
    score: 0
  };

  componentDidMount() {
    this.fetchQuestions();
  }

  fetchQuestions() {
    this.setState(() => ({ loading: true }));

    fetch(getApiUrl())
      .then(res => res.json())
      .then(data => {
        this.setState(() => ({
          questions: data.results,
          loading: false
        }));
      })
      .catch(e => console.log(e));
  }

  render() {
    const { questions, questionsAnswered, score } = this.state;

    return (
      <div className="GameScreen">
        <HeaderBar
          numOfQuestions={questions.length}
          questionsAnswered={questionsAnswered.length}
          score={score}
        />
      </div>
    );
  }
}

export { GameScreen };
