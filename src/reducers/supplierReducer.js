import { CURRENT_SUPPLIER_ID } from '../constants/actionTypes';
import { GET_LIST_SUPPLIER } from '../constants/actionTam';

const INIT_STATE = {
    id: 0,
    title: '',
    phone: '',
    address: '',
    listSupplier: [],
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CURRENT_SUPPLIER_ID:
            return {
                ...state,
                id: action.payload,
            };

        case GET_LIST_SUPPLIER:
            return {
                ...state,
                listSupplier: action.payload
            }

        default:
            return state;
    }
};
