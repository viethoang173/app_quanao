import { CURRENT_CART_BILL_ID, CURRENT_CART_ORDER_ID, CURRENT_CART_THU_ID } from '../constants/actionTam';

const INIT_STATE = {
    u_id: 0,
    bill_id: 0,
    product_id: 0,
    order_id: 0,
    thu_id: 0,
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CURRENT_CART_BILL_ID:
            return {
                ...state,
                bill_id: action.payload
            };

        case CURRENT_CART_ORDER_ID:
            return {
                ...state,
                order_id: action.payload
            }

        case CURRENT_CART_THU_ID:
            return {
                ...state,
                thu_id: action.payload
            }

        default:
            return state;
    }
};
