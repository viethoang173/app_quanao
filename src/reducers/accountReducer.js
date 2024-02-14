import { USER_INFO, VIEW_PROFILE } from '../constants/actionTypes';

const INIT_STATE = {
    uid: 0,
    username: '',
    fullname: '',
    phone: '',
    email: '',
    role: [],
    active_uid: 0
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case USER_INFO:
            return {
                ...state,
                uid: action.payload.uid,
                username: action.payload.username,
                fullname: action.payload.fullname,
                phone: action.payload.phone,
                email: action.payload.email,
                role: action.payload.role,
            };
        case VIEW_PROFILE:
            return {
                ...state,
                active_uid: action.payload.role,
            };

        default:
            return state;
    }
};
