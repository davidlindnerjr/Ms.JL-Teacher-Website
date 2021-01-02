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

export const calendarEventAddReducer = (state = {}, action) => {
    switch(action.type){
        case CALENDAR_EVENT_ADD_REQUEST:
            return { loading: true }
        case CALENDAR_EVENT_ADD_SUCCESS:
            return { loading: false, success: true, calendarEvent: action.payload }
        case CALENDAR_EVENT_ADD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const calendarEventListReducer = (state = {calendarEvents: []}, action) => {
    switch(action.type){
        case CALENDAR_EVENT_LIST_REQUEST:
            return { loading: true }
        case CALENDAR_EVENT_LIST_SUCCESS:
            return { loading: false, calendarEvents: action.payload }
        case CALENDAR_EVENT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default: 
            return state
    }
}

export const calendarEventDeleteReducer = (state = {}, action) => {
    switch(action.type){
        case CALENDAR_EVENT_DELETE_REQUEST:
            return { loading: true }
        case CALENDAR_EVENT_DELETE_SUCCESS:
            return { loading: false, success: true }
        case CALENDAR_EVENT_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default: 
            return state
    }
}
