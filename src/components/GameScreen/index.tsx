import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetGame, fetchQuestions } from '../../actions';
import { GameState } from '../../types';
import { HeaderBar } from '../HeaderBar';
import { LoadingSpinner } from '../Loading';
import { Questions } from '../Questions';
import { ModalCompleted } from '../Modal';
import './styles.scss';

type GameScreenProps = GameState & {
  resetGame: any;
  fetchQuestions: any;
};

class GameScreen extends Component<GameScreenProps> {
  componentDidMount() {
    const { resetGame, fetchQuestions } = this.props;

    resetGame();
    fetchQuestions();
  }

  render() {
    const { questions, loading, questionsAnswered, score } = this.props;

    const completed =
      !!questionsAnswered.length &&
      questionsAnswered.length === questions.length;

    return (
      <div className="GameScreen">
        <HeaderBar
          questionsTotal={questions.length}
          numOfQuestionsAnswered={questionsAnswered.length}
          score={score}
        />

        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Questions
              questions={questions}
              questionsAnswered={questionsAnswered}
            />

            {completed && <ModalCompleted />}
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: GameState) => ({
  questions: state.questions,
  loading: state.loading,
  questionsAnswered: state.questionsAnswered,
  score: state.score
});

export default connect(mapStateToProps, {
  resetGame,
  fetchQuestions
})(GameScreen);
