import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Question, AnswerObject, SelectAnswerAction } from '../../types';
import { selectAnswer } from '../../actions';
import './styles.scss';

type ChoicesProps = {
  question: Question;
  questionIndex: number;
  selectAnswer: ({
    questionIndex,
    answerIndex
  }: AnswerObject) => SelectAnswerAction;
};

class Choices extends Component<ChoicesProps> {
  state = {
    selectedChoiceIndex: null,
    hasSelected: false
  };

  setSelectedAnswer(index: number) {
    this.setState(() => ({
      selectedChoiceIndex: index,
      hasSelected: true
    }));
  }

  render() {
    const {
      question: { choices, correct_answer },
      questionIndex,
      selectAnswer
    } = this.props;
    const { selectedChoiceIndex, hasSelected } = this.state;

    return (
      <ul className="choices">
        {choices.map((answer: string, answerIndex: number) => (
          <li
            key={answerIndex}
            className={classnames('choice', {
              'selected-choice': selectedChoiceIndex === answerIndex,
              'selected-correctly': hasSelected && answer === correct_answer
            })}
            onClick={() => {
              this.setSelectedAnswer(answerIndex);
              selectAnswer({ questionIndex, answerIndex });
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </li>
        ))}
      </ul>
    );
  }
}

export default connect(null, { selectAnswer })(Choices);
