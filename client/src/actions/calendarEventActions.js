import {
    CALENDAR_EVENT_ADD_REQUEST,
    CALENDAR_EVENT_ADD_SUCCESS,
    CALENDAR_EVENT_ADD_FAIL,
    CALENDAR_EVENT_LIST_REQUEST,
    CALENDAR_EVENT_LIST_SUCCESS,
    CALENDAR_EVENT_LIST_FAIL,
    CALENDAR_EVENT_DELETE_REQUEST,
    CALENDAR_EVENT_DELETE_SUCCESS,
    CALENDAR_EVENT_DELETE_FAIL
} from '../constants/calendarEventConstants';

import axios from 'axios';

export const addCalendarEvent = (calendarEvent) => async (dispatch) => {

    try {

        dispatch({
            type: CALENDAR_EVENT_ADD_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/calendarEvents', calendarEvent, config);

        dispatch({
            type: CALENDAR_EVENT_ADD_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CALENDAR_EVENT_ADD_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

export const listCalendarEvent = () => async (dispatch) => {
    try {

        dispatch({
            type: CALENDAR_EVENT_LIST_REQUEST
        })

        const { data } = await axios.get('/api/calendarEvents');

        dispatch({
            type: CALENDAR_EVENT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CALENDAR_EVENT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const deleteCalendarEvent = (id) => async (dispatch) => {
    try {

        dispatch({
            type: CALENDAR_EVENT_DELETE_REQUEST
        })

        await axios.delete(`/api/calendarEvents/${id}`);

        dispatch({
            type:CALENDAR_EVENT_DELETE_SUCCESS,

        })

    } catch (error) {
        dispatch({
            type: CALENDAR_EVENT_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}