import { Action } from '../actions/index';
import { ActionType } from '../action-types/index';

const initialState = {
    vote: 0,
    items: [],
    loadedITems: false,
    showRocketDetails: false,
    selectedRocket: null
};

type item = {
    items: [],
    loadedItems: boolean,
    showRocketDetails: boolean,
    selectedRocket: any
}

const itemsReducer = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.GET_ITEMS_SUCCESS:
            return {
                ...state,
                loadedItems: true,
                items: action.payload
            };
        case ActionType.SHOW_ROCKET_DETAILS:
            return {
                ...state,
                showRocketDetails: action.payload.showRocketDetails,
                selectedRocket: action.payload.selectedRocket
            }
        default:
            return state;
    }
}

export default itemsReducer;