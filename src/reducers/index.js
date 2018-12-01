import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import wordReducer from './wordReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    authReducer,
    userReducer,
    wordReducer,
    form : formReducer
})

export default rootReducer