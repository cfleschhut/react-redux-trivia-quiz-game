import React from 'react';
import { Button } from '../Button';
import './styles.scss';

export const StartScreen = () => {
  return (
    <div className="StartScreen">
      <h1>Trivia Quiz</h1>

      <Button to="/game">Start</Button>
    </div>
  );
};
