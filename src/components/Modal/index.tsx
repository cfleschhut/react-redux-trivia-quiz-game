import React, { Component } from 'react';
import { Button } from '../Button';
import './styles.scss';

class ModalCompleted extends Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = '';
  }

  render() {
    return (
      <div className="modal-completed">
        <h2>All questions answered!</h2>
        <p>
          <Button to="/summary">Go to summary</Button>
        </p>
      </div>
    );
  }
}

export { ModalCompleted };
