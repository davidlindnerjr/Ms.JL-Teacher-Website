import {
    ADMIN_USER_LOGIN_REQUEST,
    ADMIN_USER_LOGIN_SUCCESS,
    ADMIN_USER_LOGIN_FAIL,
    ADMIN_USER_LOGOUT
} from '../constants/adminUserConstants';

export const adminUserLoginReducer = (state = { }, action) => {
    switch(action.type){
        case ADMIN_USER_LOGIN_REQUEST:
            return { loading: true }
        case ADMIN_USER_LOGIN_SUCCESS:
            return { loading: false,  adminUserInfo: action.payload}
        case ADMIN_USER_LOGIN_FAIL: 
            return { loading: false, error: action.payload }
        case ADMIN_USER_LOGOUT:
            return {}
        default:
            return state
    }
}