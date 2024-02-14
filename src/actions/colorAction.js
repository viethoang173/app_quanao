import { CURRENT_COLOR_ID, LIST_COLOR_ID, REMOVE_COLOR_ID, LIST_SHOW_COLOR, UPDATE_COLOR_ID, GET_ALL_COLOR } from '../constants/actionTypes';
import { UPDATE_LIST_ALL_COLOR } from '../constants/actionTam'

const colorAction = (act, data) => async (dispatch) => {
    switch (act) {
        case 'current_color_id':
            dispatch({ type: CURRENT_COLOR_ID, payload: data }); break;

        case 'list_color_id':
            dispatch({ type: LIST_COLOR_ID, payload: data }); break;

        case 'remove_color_id':
            dispatch({ type: REMOVE_COLOR_ID, payload: data }); break;

        case 'list_show_color':
            dispatch({ type: LIST_SHOW_COLOR, payload: data }); break;

        case 'update_color_id':
            dispatch({ type: UPDATE_COLOR_ID, payload: data }); break;

        case 'get_all_color':
            dispatch({ type: GET_ALL_COLOR, payload: data }); break;

        case 'update_list_all_color':
            dispatch({ type: UPDATE_LIST_ALL_COLOR, payload: data }); break;

        default:
            break;
    }
}

export default colorAction;