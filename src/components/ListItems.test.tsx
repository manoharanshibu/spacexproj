import React from 'react';
import { render, screen } from '@testing-library/react';
import ListItems from './ListItems';

import { Provider } from 'react-redux'
import { store } from './../state/index';

describe(('ListItems Component'), () => {

    const initialState = {
        items: [],
        loadedItems: false,
        showRocketDetails: false,
        selectedRocket: null
    }


    jest.mock('react-redux', () => ({
        useDispatch: () => { },
        useSelector: () => ({
            state: initialState,
        }),
    }));

    it('should render ag grid element', () => {
        render(<Provider store={store}><ListItems /></Provider>)
        const linkElement = screen.getByRole('grid');
        expect(linkElement).toBeInTheDocument();
    });

    it('should be using ag-grid', () => {
        render(<Provider store={store}><ListItems /></Provider>)
        const linkElement = screen.getByRole('grid');
        expect(linkElement).toHaveClass('ag-root')
    });

    it('should be rendering all items', () => {
        render(<Provider store={store}><ListItems /></Provider>)
        const linkElement = screen.getAllByRole('columnheader');
        expect(linkElement).toHaveLength(8);
    });

    it('should be rendering all header columns', () => {
        render(<Provider store={store}><ListItems /></Provider>)
        const linkElement = screen.getAllByRole('columnheader');
        expect(linkElement[0]).toHaveTextContent('Mission Name');
        expect(linkElement[1]).toHaveTextContent('Rocket Name');
        expect(linkElement[2]).toHaveTextContent('Details');
        expect(linkElement[3]).toHaveTextContent('Launch Date');
        expect(linkElement[4]).toHaveTextContent('Launch Success');
        expect(linkElement[5]).toHaveTextContent('Ships');
        expect(linkElement[6]).toHaveTextContent('Flight Number');
        expect(linkElement[7]).toHaveTextContent('Links');
    });
})
