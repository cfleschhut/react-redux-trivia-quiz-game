import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { selectAnswer } from '../../actions';
import './styles.scss';

class Choices extends Component<any, {}> {
  state = {
    selectedChoiceIndex: null,
    hasSelected: false
  };

  setSelectedAnswer(index: any) {
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
    }: any = this.props;
    const { selectedChoiceIndex, hasSelected } = this.state;

    return (
      <ul className="choices">
        {choices.map((answer: any, answerIndex: any) => (
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
