import { CURRENT_HANG_ID, GET_LIST_HANG } from '../constants/actionTam';

const INIT_STATE = {
    id: 0,
    title: '',
    listHang: '',
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CURRENT_HANG_ID:
            return {
                ...state,
                id: action.payload,
            };

        case GET_LIST_HANG:
            return {
                ...state,
                listHang: action.payload
            }
            
        default:
            return state;
    }
};
