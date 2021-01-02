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

export const messageSendReducer = (state = { }, action) => {
    switch(action.type){
        case MESSAGE_SEND_REQUEST:
            return { loading: true }
        case MESSAGE_SEND_SUCCESS:
            return { loading: false, success: true, message: action.payload }
        case MESSAGE_SEND_FAIL:
            return { loading: false, error: action.payload }
        default: 
            return state
    }
}

export const messageListReducer = (state = {messages: [] }, action) => {
    switch(action.type){
        case MESSAGE_LIST_REQUEST:
            return { loading: true, messages: [] }
        case MESSAGE_LIST_SUCCESS:
            return { loading: false, messages: action.payload }
        case MESSAGE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const messageDeleteReducer = (state = {}, action) => {
    switch(action.type){
        case MESSAGE_DELETE_REQUEST:
            return { loading: true }
        case MESSAGE_DELETE_SUCCESS:
            return { loading: false, success: true }
        case MESSAGE_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}