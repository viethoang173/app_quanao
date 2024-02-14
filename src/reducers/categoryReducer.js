import { GET_CATEGORIES, CURRENT_CATEGORY_ID } from '../constants/actionTypes';
import { GET_LIST_CATEGORY } from '../constants/actionTam';

const INIT_STATE = {
    id: 0,
    // title: '',
    listCategory: [],
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
            };
        case CURRENT_CATEGORY_ID:
            return {
                ...state,
                id: action.payload
            }

        case GET_LIST_CATEGORY:
            return {
                ...state,
                listCategory: action.payload
            };


        default:
            return state;
    }
};
