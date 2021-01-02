import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { adminUserLoginReducer } from './reducers/adminUserReducers';
import { messageSendReducer, messageListReducer, messageDeleteReducer } from './reducers/messageReducer';
import { resourceAddReducer, resourceListReducer, resourceDeleteReducer } from './reducers/resourceReducers';
import { announcementAddReducer, announcementListReducer, announcementDeleteReducer } from './reducers/announcementReducers';
import { calendarEventAddReducer, calendarEventListReducer, calendarEventDeleteReducer } from './reducers/calendarEventReducers';

const reducer = combineReducers({
    adminUserLogin: adminUserLoginReducer,
    messageSend: messageSendReducer,
    messageList: messageListReducer,
    messageDelete: messageDeleteReducer,
    resourceAdd: resourceAddReducer,
    resourceList: resourceListReducer,
    resourceDelete: resourceDeleteReducer,
    announcementAdd: announcementAddReducer,
    announcementList: announcementListReducer,
    announcementDelete: announcementDeleteReducer,
    calendarEventAdd: calendarEventAddReducer,
    calendarEventList: calendarEventListReducer,
    calendarEventDelete: calendarEventDeleteReducer,
});

const adminUserInfoFromStorage = localStorage.getItem('adminUserInfo') ? JSON.parse(localStorage.getItem('adminUserInfo')) : null;

const initialState = {
    adminUserLogin: {
        adminUserInfo: adminUserInfoFromStorage,
    }
}

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
