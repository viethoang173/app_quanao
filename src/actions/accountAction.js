import { USER_INFO, VIEW_PROFILE } from '../constants/actionTypes';

const userAction = (act, data) => async (dispatch) => {
    switch (act) {
        case 'user_info':
            dispatch({ type: USER_INFO, payload: data }); break;

        case 'view_profile':
            dispatch({ type: VIEW_PROFILE, payload: data }); break;

        default:
            break;
    }
}

export default userAction;