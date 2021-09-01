import { combineReducers } from 'redux';
import auth from './auth';
import gfg from './gfg';

export default combineReducers({
    auth,
    gfg
});