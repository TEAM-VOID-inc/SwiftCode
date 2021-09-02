import { combineReducers } from 'redux';
import auth from './auth';
import gfg from './gfg';
import codechef from './codechef';
import codeforces from './codeforces';
import spoj from './spoj';
import playlist from './playlist';

export default combineReducers({
    auth,
    gfg,
    codechef,
    codeforces,
    spoj,
    playlist
});