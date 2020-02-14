import React from 'react';
import classnames from 'classnames';
import Choices from '../Choices';
import './styles.scss';

export const Questions = ({ questions, questionsAnswered }) => (
  <div className="questions">
    {questions.map((question, questionIndex) => (
      <div
        key={questionIndex}
        className={classnames('question', {
          'question-answered': questionsAnswered.find(
            answerObj => answerObj.question === questionIndex
          )
        })}
      >
        <h3
          className="question-title"
          dangerouslySetInnerHTML={{ __html: question.question }}
        />

        <Choices question={question} questionIndex={questionIndex} />
      </div>
    ))}
  </div>
);
