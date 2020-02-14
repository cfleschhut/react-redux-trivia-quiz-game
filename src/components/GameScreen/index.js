import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetGame, fetchQuestions } from '../../actions';
import { HeaderBar } from '../HeaderBar';
import { LoadingSpinner } from '../Loading';
import { Questions } from '../Questions';
import { ModalCompleted } from '../Modal';
import './styles.scss';

class GameScreen extends Component {
  componentDidMount() {
    this.props.resetGame();
    this.props.fetchQuestions();
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

const mapStateToProps = state => ({
  questions: state.questions,
  loading: state.loading,
  questionsAnswered: state.questionsAnswered,
  score: state.score
});

const mapDispatchToProps = {
  resetGame,
  fetchQuestions
};

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
