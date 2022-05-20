import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('App is rendering', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add field names and values/i);
  expect(linkElement).toBeInTheDocument();
});
