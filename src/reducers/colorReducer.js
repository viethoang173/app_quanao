import { CURRENT_COLOR_ID, LIST_COLOR_ID, REMOVE_COLOR_ID, UPDATE_COLOR_ID, LIST_SHOW_COLOR, GET_ALL_COLOR } from '../constants/actionTypes';
import { UPDATE_LIST_ALL_COLOR } from '../constants/actionTam'

const INIT_STATE = {
    id: 0,
    title: '',
    listColor: [],
    listShowColor: [],
    listAllColor: []
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CURRENT_COLOR_ID:
            return {
                ...state,
                id: action.payload,
            };

        case LIST_COLOR_ID:
            return {
                ...state,
                listColor: [...state.listColor, action.payload]
            }

        case UPDATE_COLOR_ID:
            return {
                ...state,
                listColor: action.payload
            }


        case REMOVE_COLOR_ID:
            const removedValue = action.payload;
            const newListColor = state.listColor.filter(item => item.id !== removedValue);
            return {
                ...state,
                listColor: newListColor,
            };

        case LIST_SHOW_COLOR:
            return {
                ...state,
                listShowColor: action.payload,
            }

        case GET_ALL_COLOR:
            return {
                ...state,
                listAllColor: [...state.listAllColor, action.payload]
            }

        case UPDATE_LIST_ALL_COLOR:
            return {
                ...state,
                listAllColor: action.payload,
            }


        default:
            return state;
    }
};
