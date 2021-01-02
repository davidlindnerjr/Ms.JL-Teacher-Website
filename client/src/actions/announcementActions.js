import {
    ANNOUNCEMENT_ADD_REQUEST,
    ANNOUNCEMENT_ADD_SUCCESS,
    ANNOUNCEMENT_ADD_FAIL,
    ANNOUNCEMENT_LIST_REQUEST,
    ANNOUNCEMENT_LIST_SUCCESS,
    ANNOUNCEMENT_LIST_FAIL,
    ANNOUNCEMENT_DELETE_REQUEST,
    ANNOUNCEMENT_DELETE_SUCCESS,
    ANNOUNCEMENT_DELETE_FAIL,
} from '../constants/announcementConstants';

import axios from 'axios';

export const addAnnouncement = (announcement) => async (dispatch) => {

    try {

        dispatch({
            type: ANNOUNCEMENT_ADD_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/announcements', announcement, config);

        dispatch({
            type: ANNOUNCEMENT_ADD_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ANNOUNCEMENT_ADD_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

export const listAnnouncements = () => async (dispatch) => {
    try {

        dispatch({
            type: ANNOUNCEMENT_LIST_REQUEST
        })

        const { data } = await axios.get('/api/announcements');

        dispatch({
            type: ANNOUNCEMENT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ANNOUNCEMENT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const deleteAnnouncement = (id) => async (dispatch) => {
    try {

        dispatch({
            type: ANNOUNCEMENT_DELETE_REQUEST
        })

        await axios.delete(`/api/announcements/${id}`);

        dispatch({
            type:  ANNOUNCEMENT_DELETE_SUCCESS,

        })

    } catch (error) {
        dispatch({
            type:  ANNOUNCEMENT_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}