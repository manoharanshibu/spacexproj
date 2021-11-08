import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Header from './Header';

describe(('Header Component'), () => {

    it('renders correctly', () => {
        const tree = renderer
            .create(<Header title='SPACE-X' />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

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
})
