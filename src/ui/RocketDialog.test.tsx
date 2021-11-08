import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import { store } from './../state/index';
import RocketDialog from '../ui/RocketDialog';
import renderer from 'react-test-renderer';

const initialState = {
    items: [],
    loadedItems: false,
    showRocketDetails: true,
    selectedRocket: null
}

jest.mock('react-redux', () => ({
    useDispatch: () => { },
    useSelector: () => ({
        state: initialState,
    }),
}));

describe(('Rocket Dialog Component'), () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<RocketDialog open={true} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
