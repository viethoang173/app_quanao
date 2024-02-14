import { CURRENT_CUSTOMER_ID } from '../constants/actionTypesH';

const customerAction = (act, data) => async (dispatch) => {
    switch (act) {
        case 'current_customer_id':
            dispatch({ type: CURRENT_CUSTOMER_ID, payload: data }); break;
        default:
            break;
    }
}

export default customerAction;