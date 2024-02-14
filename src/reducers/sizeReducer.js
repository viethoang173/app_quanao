import { CURRENT_SIZE_ID, LIST_SIZE_ID, REMOVE_SIZE_ID, REMOVE_ALL, LIST_SHOW_SIZE, UPDATE_SIZE_ID, GET_ALL_SIZE } from '../constants/actionTypes';
import { UPDATE_LIST_ALL_SIZE } from '../constants/actionTam';

const INIT_STATE = {
    id: 0,
    title: '',
    listSize: [],
    listShowSize: [],
    listAllSize: []
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CURRENT_SIZE_ID:
            return {
                ...state,
                id: action.payload,
            };

        case LIST_SIZE_ID:
            return {
                ...state,
                listSize: [...state.listSize, action.payload]
            }

        case UPDATE_SIZE_ID:
            return {
                ...state,
                listSize: action.payload
            }

        case REMOVE_SIZE_ID:
            const removedValue = action.payload;
            const newListSize = state.listSize.filter(item => item.id !== removedValue);
            return {
                ...state,
                listSize: newListSize,
            };

        case REMOVE_ALL:
            const removeArray = action.payload;
            return {
                ...state,
                listSize: removeArray,
            }

        case LIST_SHOW_SIZE:
            return {
                ...state,
                listShowSize: action.payload,
            }

        case GET_ALL_SIZE:
            return {
                ...state,
                listAllSize: [...state.listAllSize, action.payload]
            }

        case UPDATE_LIST_ALL_SIZE:
            return {
                ...state,
                listAllSize: action.payload
            }

        default:
            return state;
    }
};
