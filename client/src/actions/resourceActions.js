import {
    RESOURCE_ADD_REQUEST,
    RESOURCE_ADD_SUCCESS,
    RESOURCE_ADD_FAIL,
    RESOURCE_LIST_REQUEST,
    RESOURCE_LIST_SUCCESS,
    RESOURCE_LIST_FAIL,
    RESOURCE_DELETE_REQUEST,
    RESOURCE_DELETE_SUCCESS,
    RESOURCE_DELETE_FAIL
} from '../constants/resourceConstants';

import axios from 'axios';

export const addResource = (resource) => async (dispatch) => {

    try {

        dispatch({
            type: RESOURCE_ADD_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/resources', resource, config);

        dispatch({
            type: RESOURCE_ADD_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: RESOURCE_ADD_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

export const listResources = () => async (dispatch, getState) => {
    try {

        dispatch({
            type: RESOURCE_LIST_REQUEST
        })

        const { data } = await axios.get('/api/resources');

        dispatch({
            type: RESOURCE_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: RESOURCE_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const deleteResource = (id) => async (dispatch) => {
    try {

        dispatch({
            type: RESOURCE_DELETE_REQUEST
        })

        await axios.delete(`/api/resources/${id}`);

        dispatch({
            type: RESOURCE_DELETE_SUCCESS,

        })

    } catch (error) {
        dispatch({
            type: RESOURCE_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}