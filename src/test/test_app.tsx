import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App';

test('muestra "Hola mundo"', () => {
    render(<App />);
    const textElement = screen.getByText(/Hola mundo/i);
    //expect(textElement).toBeInTheDocument();
});