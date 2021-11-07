import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe(('Header Component'), () => {
    it('should render the title text', () => {
        render(<Header title='SPACE-X' />);
        const linkElement = screen.getByText(/SPACE-X/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('should render heading', () => {
        render(<Header title='SPACE-X' />);
        const linkElement = screen.getByTestId('header');
        expect(linkElement).toBeInTheDocument();
    });

    it('title should be visible', () => {
        render(<Header title='SPACE-X' />);
        const linkElement = screen.getByTestId('header');
        expect(linkElement).toBeVisible();
    });

    it('should have the title role set', () => {
        render(<Header title='SPACE-X' />);
        const linkElement = screen.getByRole('title');
        expect(linkElement).toHaveTextContent('SPACE-X');
    });
})
