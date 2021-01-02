import {
    MESSAGE_SEND_REQUEST,
    MESSAGE_SEND_SUCCESS,
    MESSAGE_SEND_FAIL,
    MESSAGE_LIST_REQUEST,
    MESSAGE_LIST_SUCCESS,
    MESSAGE_LIST_FAIL,
    MESSAGE_DELETE_REQUEST,
    MESSAGE_DELETE_SUCCESS,
    MESSAGE_DELETE_FAIL
} from '../constants/messageConstants';

import axios from 'axios';

export const sendMessage = (message) => async (dispatch) => {

    try {

        dispatch({
            type: MESSAGE_SEND_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/messages', message, config);

        dispatch({
            type: MESSAGE_SEND_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: MESSAGE_SEND_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

export const listMessages = () => async (dispatch, getState) => {
    try {

        dispatch({
            type: MESSAGE_LIST_REQUEST
        })

        const { adminUserLogin: { adminUserInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${adminUserInfo.token}`
            }
        }

        const { data } = await axios.get('/api/messages', config);

        dispatch({
            type: MESSAGE_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: MESSAGE_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const deleteMesage = (id) => async (dispatch) => {
    try {

        dispatch({
            type: MESSAGE_DELETE_REQUEST
        })

        await axios.delete(`/api/messages/${id}`);

        dispatch({
            type: MESSAGE_DELETE_SUCCESS,

        })

    } catch (error) {
        dispatch({
            type: MESSAGE_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}