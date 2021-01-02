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

export const announcementAddReducer = (state = {}, action) => {
    switch(action.type){
        case ANNOUNCEMENT_ADD_REQUEST:
            return { loading: true }
        case ANNOUNCEMENT_ADD_SUCCESS:
            return { loading: false, success: true, announcement: action.payload }
        case ANNOUNCEMENT_ADD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const announcementListReducer = (state = {announcements: []}, action) => {
    switch(action.type){
        case ANNOUNCEMENT_LIST_REQUEST:
            return { loading: true }
        case ANNOUNCEMENT_LIST_SUCCESS:
            return { loading: false, announcements: action.payload }
        case ANNOUNCEMENT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default: 
            return state
    }
}

export const announcementDeleteReducer = (state = {}, action) => {
    switch(action.type){
        case ANNOUNCEMENT_DELETE_REQUEST:
            return { loading: true }
        case ANNOUNCEMENT_DELETE_SUCCESS:
            return { loading: false, success: true }
        case ANNOUNCEMENT_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default: 
            return state
    }
}