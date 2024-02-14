import { CURRENT_CART_BILL_ID, CURRENT_CART_ORDER_ID, CURRENT_CART_THU_ID } from '../constants/actionTam';

const cartAction = (act, data) => async (dispatch) => {
    switch (act) {
        case 'current_cart_bill_id':
            dispatch({ type: CURRENT_CART_BILL_ID, payload: data }); break;
        case 'current_cart_order_id':
            dispatch({ type: CURRENT_CART_ORDER_ID, payload: data }); break;
        case 'current_cart_thu_id':
            dispatch({ type: CURRENT_CART_THU_ID, payload: data }); break;
        default:
            break;
    }
}

export default cartAction;