import { ActionType } from '../action-types/index';

interface IGetItemsSuccessAction {
    type: ActionType.GET_ITEMS_SUCCESS
    payload: any
}

interface IShowRocketActions {
    type: ActionType.SHOW_ROCKET_DETAILS
    payload: any
}

export type Action = IGetItemsSuccessAction | IShowRocketActions