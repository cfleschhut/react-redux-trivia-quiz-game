import React from 'react';
import classnames from 'classnames';
import { Question, AnswerObject } from '../../types';
import Choices from '../Choices';
import './styles.scss';

type QuestionsProps = {
  questions: Question[];
  questionsAnswered: AnswerObject[];
};

export const Questions = ({ questions, questionsAnswered }: QuestionsProps) => (
  <div className="questions">
    {questions.map((question: Question, questionIndex: number) => (
      <div
        key={questionIndex}
        className={classnames('question', {
          'question-answered': questionsAnswered.find(
            answerObj => answerObj.questionIndex === questionIndex
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
