import React from 'react';
import './styles.scss';

export const HeaderBar = ({
  questionsTotal,
  numOfQuestionsAnswered,
  score
}: any) => (
  <header className="header-bar">
    <div className="header-bar-container">
      <div className="header-bar-item">
        <div className="progress">
          Questions:
          <span className="score-value">
            {numOfQuestionsAnswered}/{questionsTotal}
          </span>
        </div>
      </div>

      <div className="header-bar-item">
        <h1 className="title">Trivia Quiz</h1>
      </div>

      <div className="header-bar-item">
        <div className="score">
          Score:
          <span className="score-value">{score}</span>
        </div>
      </div>
    </div>
  </header>
);
