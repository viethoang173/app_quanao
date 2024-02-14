import { CURRENT_SIZE_ID, LIST_SIZE_ID, REMOVE_SIZE_ID, REMOVE_ALL, LIST_SHOW_SIZE, UPDATE_SIZE_ID, GET_ALL_SIZE } from '../constants/actionTypes';
import { UPDATE_LIST_ALL_SIZE } from '../constants/actionTam';

const sizeAction = (act, data) => async (dispatch) => {
    switch (act) {
        case 'current_size_id':
            dispatch({ type: CURRENT_SIZE_ID, payload: data }); break;
        case 'list_size_id':
            dispatch({ type: LIST_SIZE_ID, payload: data }); break;
        case 'remove_size_id':
            dispatch({ type: REMOVE_SIZE_ID, payload: data }); break;
        case 'remove_all':
            dispatch({ type: REMOVE_ALL, payload: data }); break;
        case 'list_show_size':
            dispatch({ type: LIST_SHOW_SIZE, payload: data }); break;
        case 'update_size_id':
            dispatch({ type: UPDATE_SIZE_ID, payload: data }); break;
        case 'get_all_size':
            dispatch({ type: GET_ALL_SIZE, payload: data }); break;
        case 'update_list_all_size':
            dispatch({ type: UPDATE_LIST_ALL_SIZE, payload: data }); break;
        default:
            break;
    }
}

export default sizeAction;