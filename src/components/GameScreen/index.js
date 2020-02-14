import React, { Component } from 'react';
import { HeaderBar } from '../HeaderBar';
import { LoadingSpinner } from '../Loading';
import { Questions } from '../Questions';
import { ModalCompleted } from '../Modal';
import './styles.scss';

const getApiUrl = () => {
  const API_BASE_URL = 'https://opentdb.com/api.php';
  const params = Object.entries({
    amount: 4,
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

  handleAnswerClick = (questionIndex, answerIndex, answer, correct_answer) => {
    console.log(questionIndex, answerIndex, answer, correct_answer);

    this.setState(state => ({
      questionsAnswered: [
        ...state.questionsAnswered,
        {
          question: questionIndex,
          answer: answerIndex
        }
      ],
      score: state.score + (answer === correct_answer ? 10 : 0)
    }));
  };

  render() {
    const { questions, loading, questionsAnswered, score } = this.state;
    const completed =
      !!questionsAnswered.length &&
      questionsAnswered.length === questions.length;

    return (
      <div className="GameScreen">
        <HeaderBar
          numOfQuestions={questions.length}
          questionsAnswered={questionsAnswered.length}
          score={score}
        />

        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Questions
              questions={questions}
              questionsAnswered={questionsAnswered}
              handleAnswerClick={this.handleAnswerClick}
            />

            {completed && <ModalCompleted />}
          </>
        )}
      </div>
    );
  }
}

export { GameScreen };
