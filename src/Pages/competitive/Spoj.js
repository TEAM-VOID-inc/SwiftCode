import React, { useState } from 'react';
import '../../assets/css/codeforces.css';
import HeaderTypography from '../../pageComponents/HeaderTypography';
import Spojcard from '../../pageComponents/Competitve/Spoj/SpojCard';
import Skeleton from '../../pageComponents/Competitve/Skeleton';
import '../../assets/css/skeleton.css';



function Spoj() {
    const [loading] = useState(false);
    const SpojData = Array(6).fill('');
    return (
        <div>
            <div className="codeforcesContent">
            <HeaderTypography logoid={2} HeaderContent="Spoj - Content Page"/>
            {loading ? 
                <Skeleton />
            :
            <div> 
            {
                SpojData.map((item, index) =>(
                            <Spojcard key={index} 
                                id = {index}
                                contentName="simple math" 
                                contentLink = "/problems/tag/simple-math"
                                contentProblemCount={100} />))
            }
            </div>
            
            }
        </div>
        </div>
    )
}

export default Spoj
