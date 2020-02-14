import React from 'react';
import { render } from '@testing-library/react';
import { App } from './index';

it('renders app title', () => {
  const { getByText } = render(<App />);
  const appTitle = getByText(/Trivia Quiz/i);

  expect(appTitle).toBeInTheDocument();
});
