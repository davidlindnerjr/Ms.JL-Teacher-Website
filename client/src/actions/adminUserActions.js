import axios from 'axios';
import {
    ADMIN_USER_LOGIN_REQUEST,
    ADMIN_USER_LOGIN_SUCCESS,
    ADMIN_USER_LOGIN_FAIL,
    ADMIN_USER_LOGOUT,
} from '../constants/adminUserConstants';

export const login = (username, password) => async (dispatch) => {
    try{

        dispatch({
            type: ADMIN_USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const { data } = await axios.post('/api/adminUsers/login', {username, password }, config);
        dispatch({
            type: ADMIN_USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('adminUserInfo', JSON.stringify(data))

    } catch(error) {
        dispatch({
            type: ADMIN_USER_LOGIN_FAIL,
            //payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })

    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('adminUserInfo');
    dispatch({
        type: ADMIN_USER_LOGOUT
    })
    document.location.href = '/login';
}