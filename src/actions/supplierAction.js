import { CURRENT_SUPPLIER_ID } from '../constants/actionTypes';
import { GET_LIST_SUPPLIER } from '../constants/actionTam';

const supplierAction = (act, data) => async (dispatch) => {
    switch (act) {
        case 'current_supplier_id':
            dispatch({ type: CURRENT_SUPPLIER_ID, payload: data }); break;
        case 'get_list_supplier':
            dispatch({ type: GET_LIST_SUPPLIER, payload: data }); break;
        default:
            break;
    }
}

export default supplierAction;