import * as api from '../../api/index.js';
import { ALLPLAYLIST } from '../../constants/actionTypes';

export const Getallplaylist = (token) => async (dispatch) =>{
    try {
        const data =  await api.getallPlaylist(token);
        dispatch({type: ALLPLAYLIST, data});
    } catch (error) {
        const data =  error.response.data;
        return data;
    }
}


export const GetPlaylistVedio = (id, token) => async (dispatch) =>{
        try {
            const data =  await api.getplaylistvedios(id, token);
            return {success: true, data}
        } catch (error) {
            const data =  error.response.data;
            return {success: false, data};
        }
}