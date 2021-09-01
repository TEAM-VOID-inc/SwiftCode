import React, { useState } from 'react'
import ReactPlayer from 'react-player';
import Card from '../../components/Card';
import Typography from '../../components/Typography';
import font from '../../utilities/font';
import Checkbox from '@material-ui/core/Checkbox';

function VedioPlayer() {
    const [duration, setDuration] = useState(1);
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    function Progressfilter(progress){
        const p = (progress/duration)*100;
        if(p > 90) {
            console.log(p);
        }
    }

    
    return (
        <div  style={{margin: '10px', display: 'flex', justifyContent: 'space-around', color: 'white'}}>

            <div>
                <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=8YjFbMbfXaQ'
                    width='70vw'
                    height='75vh'
                    controls
                    onDuration={(duration) => setDuration(duration)}
                    onProgress={(progress) => {
                        Progressfilter(progress.playedSeconds);
                    }}
                />
            </div>

        <Card  minw="25vw" maxw="25vw" h="85vh" p="10px" bg="rgba(109, 181, 181, 0.33)" >

            <div style={{borderBottom: '1px solid white', paddingBottom: '10px'}}>
                <Typography m="0px 0px 0px 20px"  fs="25px" color="white" ff={font.ubuntu} fw={500}>Playlist</Typography>
            </div>

            <div style={{borderBottom: '1px solid white', paddingBottom: '10px', display:'flex', alignItems: 'center'}}>
                <Checkbox checked={checked} onChange={handleChange} color="primary" inputProps={{ 'aria-label': 'checkbox with default color' }} />
                <Typography m="0px 0px 0px 20px"  fs="14px" color="white" ff={font.ubuntu} fw={500}>Vedio 1</Typography>
            </div>

        </Card>

        </div>
    )
}

export default VedioPlayer;
