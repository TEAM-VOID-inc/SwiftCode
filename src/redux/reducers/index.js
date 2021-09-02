import { combineReducers } from 'redux';
import auth from './auth';
import gfg from './gfg';
import codechef from './codechef';
import codeforces from './codeforces';
import spoj from './spoj';

export default combineReducers({
    auth,
    gfg,
    codechef,
    codeforces,
    spoj
});