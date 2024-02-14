import { CURRENT_CUSTOMER_ID } from '../constants/actionTypesH';

const INIT_STATE = {
    id: 0,
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CURRENT_CUSTOMER_ID:
            console.log(action.payload);
            return {
                ...state,
                id: action.payload,
            };

        default:
            return state;
    }
};
