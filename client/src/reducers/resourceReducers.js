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

export const resourceAddReducer = (state = {}, action) => {
    switch(action.type){
        case RESOURCE_ADD_REQUEST:
            return { loading: true }
        case RESOURCE_ADD_SUCCESS:
            return { loading: false, success: true, resource: action.payload }
        case RESOURCE_ADD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const resourceListReducer = (state = {resources: []}, action) => {
    switch(action.type){
        case RESOURCE_LIST_REQUEST:
            return { loading: true }
        case RESOURCE_LIST_SUCCESS:
            return { loading: false, resources: action.payload }
        case RESOURCE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default: 
            return state
    }
}

export const resourceDeleteReducer = (state = {}, action) => {
    switch(action.type){
        case RESOURCE_DELETE_REQUEST:
            return { loading: true }
        case RESOURCE_DELETE_SUCCESS:
            return { loading: false, success: true }
        case RESOURCE_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default: 
            return state
    }
}