import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hello text', () => {
  render(<App />);
  expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
});
