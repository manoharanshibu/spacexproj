import { ActionType } from "../action-types"
import { Action } from "../actions"
import axios from 'axios';
import { Dispatch } from 'redux';

const endpoint = process.env.REACT_APP_SPACEX_END_POINT as string;
const config = {
    headers: {
    },
};

export const fetchItems = () => {
    return async (dispatch: Dispatch<Action>) => {
        const response = await axios.get(`${endpoint}/`, config);
        try {
            dispatch({
                type: ActionType.GET_ITEMS_SUCCESS,
                payload: response ? response.data : []
            });
        } catch(error) {
            console.error(error);
        }
    }
}
