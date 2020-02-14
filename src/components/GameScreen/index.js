import React from 'react';
import { HeaderBar } from '../HeaderBar';
import './styles.scss';

export const GameScreen = () => {
  return (
    <div className="GameScreen">
      <HeaderBar numOfQuestions={10} questionsAnswered={3} score={20} />
    </div>
  );
};
