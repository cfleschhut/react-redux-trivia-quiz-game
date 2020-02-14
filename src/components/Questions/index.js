import React from 'react';
import './styles.scss';

export const Questions = ({ questions }) => (
  <div className="questions">
    {questions.map((question, questionIndex) => (
      <div key={questionIndex} className="question">
        <h3
          className="question-title"
          dangerouslySetInnerHTML={{ __html: question.question }}
        />
      </div>
    ))}
  </div>
);
