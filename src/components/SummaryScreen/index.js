import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../Button';
import './styles.scss';

const SummaryScreen = ({ score, resetGame }) => (
  <div className="SummaryScreen">
    <h2 className="headline">
      Congratulations!{' '}
      <span role="img" aria-label="celebration-emoji">
        🎉
      </span>
    </h2>
    <p className="score-display">
      Your score is: <span>{score}</span>
    </p>
    <p>
      <Button to="/">Home</Button>
    </p>
  </div>
);

const mapStateToProps = state => ({
  score: state.score
});

export default connect(mapStateToProps)(SummaryScreen);
