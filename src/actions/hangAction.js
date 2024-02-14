import { CURRENT_HANG_ID, GET_LIST_HANG } from '../constants/actionTam';

const hangAction = (act, data) => async (dispatch) => {
    switch (act) {
        case 'current_hang_id':
            dispatch({ type: CURRENT_HANG_ID, payload: data }); break;
        case 'get_list_hang':
            dispatch({ type: GET_LIST_HANG, payload: data }); break;
        default:
            break;
    }
}

export default hangAction;