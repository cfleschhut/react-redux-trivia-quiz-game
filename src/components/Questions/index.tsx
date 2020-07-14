import React from 'react';
import classnames from 'classnames';
import Choices from '../Choices';
import './styles.scss';

type Question = {
  choices: string[];
  correct_answer: string;
  question: string;
};

type QuestionsProps = {
  questions: [];
  questionsAnswered: [];
};

export const Questions = ({ questions, questionsAnswered }: QuestionsProps) => (
  <div className="questions">
    {questions.map((question: Question, questionIndex: number) => (
      <div
        key={questionIndex}
        className={classnames('question', {
          'question-answered': questionsAnswered.find(
            (answerObj: { question: number }) =>
              answerObj.question === questionIndex
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
