import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Involvio Tv shows app', () => {
    render(<App />);
    const linkElement = screen.getByText(/Involvio Tv shows app/i);
    expect(linkElement).toBeInTheDocument();
});
