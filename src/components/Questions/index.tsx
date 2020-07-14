import React from 'react';
import classnames from 'classnames';
import Choices from '../Choices';
import './styles.scss';

export const Questions = ({ questions, questionsAnswered }: any) => (
  <div className="questions">
    {questions.map((question: any, questionIndex: any) => (
      <div
        key={questionIndex}
        className={classnames('question', {
          'question-answered': questionsAnswered.find(
            (answerObj: any) => answerObj.question === questionIndex
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
