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
    return (dispatch: Dispatch<Action>) => {
        axios.get(`${endpoint}/`, config)
            .then(response => {
                dispatch({
                    type: ActionType.GET_ITEMS_SUCCESS,
                    payload: response.data
                });
            })
            .catch(error => {
                // TODO: handle the error
            })
    }
}
