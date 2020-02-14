import React from 'react';
import { Button } from '../Button';

const SummaryScreen = ({ score }) => (
  <div className="SummaryScreen">
    <h2>Congratulations!</h2>
    <p>
      Your score is: <span>{score}</span>
    </p>
    <p>
      <Button to="/">Home</Button>
    </p>
  </div>
);

export { SummaryScreen };
