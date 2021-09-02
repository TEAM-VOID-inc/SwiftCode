import React, { useEffect, useState } from 'react';
import '../../assets/css/codeforces.css';
import Typography from '../../components/Typography';
import Playlistcard from '../../pageComponents/Video/Playlistcard';
import Skeleton from '../../pageComponents/Competitve/Skeleton';
import font from '../../utilities/font';
import '../../assets/css/skeleton.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetPlaylistVedio } from '../../redux/actions/playlist';

function PlaylistVedios() {
    const {id} = useParams();
    const Token = useSelector((state) => state.auth?.token);
    const User = useSelector((state) => state.auth?.user?.data);
    const playlist = useSelector((state) => state?.playlist?.allPlaylist?.data?.playlists);
    const [playlistdata, setplaylistdata] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if(id){
            const data = dispatch(GetPlaylistVedio(id, Token));
            data.then((result) => console.log(result));
        }
    }, [User])

    return (
        <div>
            <div className="codeforcesContent">
            <Typography m="0px 40px 0px 0px " fs="45px" color="white" ff={font.ubuntu} display="flex" alignItems="center">DSA VEDIOS</Typography>
            {playlistdata === undefined || playlistdata?.length <= 0? 
                <Skeleton />
            :
            <div> 
            {
                playlist.map((item, index) =>(
                            <Playlistcard key={index} 
                                id = {item?._id}
                                title = {item?.title}/>))
            }
            </div>
            
            }
        </div>
        </div>
    )
}

export default PlaylistVedios
