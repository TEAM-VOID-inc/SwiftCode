import React, { useState } from 'react';
import '../../assets/css/codeforces.css';
import Typography from '../../components/Typography';
import Playlistcard from '../../pageComponents/Video/Playlistcard';
import Skeleton from '../../pageComponents/Competitve/Skeleton';
import font from '../../utilities/font';
import '../../assets/css/skeleton.css';



function Spoj() {
    const [loading] = useState(false);
    const playlist = Array(6).fill('');
    return (
        <div>
            <div className="codeforcesContent">
            <Typography m="0px 40px 0px 0px " fs="45px" color="white" ff={font.ubuntu} display="flex" alignItems="center">DSA VEDIOS</Typography>
            {loading ? 
                <Skeleton />
            :
            <div> 
            {
                playlist.map((item, index) =>(
                            <Playlistcard key={index} 
                                id = "6123d3fda4250725a81b0d25"
                                title = "Learn Basics of Array and Pointers"/>))
            }
            </div>
            
            }
        </div>
        </div>
    )
}

export default Spoj
