import React, { Component } from 'react';
import { HeaderBar } from '../HeaderBar';
import { LoadingSpinner } from '../Loading';
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
          questions: this.amendChoices(data.results),
          loading: false
        }));
      })
      .catch(e => console.log(e));
  }

  amendChoices(questions) {
    return questions.map(question => ({
      ...question,
      choices: this.getChoices(question)
    }));
  }

  getChoices(question) {
    const { correct_answer, incorrect_answers } = question;
    const randomPosition = Math.floor(
      Math.random() * (incorrect_answers.length + 1)
    );

    return [
      ...incorrect_answers.slice(0, randomPosition),
      correct_answer,
      ...incorrect_answers.slice(randomPosition)
    ];
  }

  render() {
    const { questions, loading, questionsAnswered, score } = this.state;

    return (
      <div className="GameScreen">
        <HeaderBar
          numOfQuestions={questions.length}
          questionsAnswered={questionsAnswered.length}
          score={score}
        />

        {loading ? <LoadingSpinner /> : <div></div>}
      </div>
    );
  }
}

export { GameScreen };
