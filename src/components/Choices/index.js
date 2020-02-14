import React, { Component } from 'react';
import classnames from 'classnames';
import './styles.scss';

class Choices extends Component {
  state = {
    selectedChoiceIndex: null,
    hasSelected: false
  };

  setSelectedAnswer(index) {
    this.setState(() => ({
      selectedChoiceIndex: index,
      hasSelected: true
    }));
  }

  render() {
    const {
      question: { choices, correct_answer },
      questionIndex,
      handleAnswerClick
    } = this.props;
    const { selectedChoiceIndex, hasSelected } = this.state;

    return (
      <ul className="choices">
        {choices.map((answer, answerIndex) => (
          <li
            key={answerIndex}
            className={classnames('choice', {
              'selected-choice': selectedChoiceIndex === answerIndex,
              'selected-correctly': hasSelected && answer === correct_answer
            })}
            onClick={() => {
              this.setSelectedAnswer(answerIndex);

              handleAnswerClick(
                questionIndex,
                answerIndex,
                answer,
                correct_answer
              );
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </li>
        ))}
      </ul>
    );
  }
}

export { Choices };
