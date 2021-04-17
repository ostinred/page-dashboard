import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('should render tabs', () => {
  const { getByText } = render(<App />);
  expect(getByText('Table')).toBeInTheDocument();
  expect(getByText('Description')).toBeInTheDocument();
});
