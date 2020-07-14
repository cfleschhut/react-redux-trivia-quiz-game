import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { selectAnswer } from '../../actions';
import './styles.scss';

type Question = {
  choices: string[];
  correct_answer: string;
};

type ChoicesProps = {
  question: Question;
  questionIndex: number;
  selectAnswer: any;
};

class Choices extends Component<ChoicesProps, {}> {
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
              selectAnswer(questionIndex, answerIndex);
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
