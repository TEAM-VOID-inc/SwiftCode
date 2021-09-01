import React, { useState } from 'react';
import '../../assets/css/codeforces.css';
import HeaderTypography from '../../pageComponents/HeaderTypography';
import Codeforcescard from '../../pageComponents/Competitve/Codeforces/CodeforcesCard';
import Skeleton from '../../pageComponents/Competitve/Skeleton';
import '../../assets/css/skeleton.css';
import CompetetiveModal from '../../pageComponents/Competitve/CompetitveModal';



function Codeforces() {
    const [loading] = useState(false);
    const CodeforcesData = Array(10).fill('');
    const codeforces = null;

    return (
        <div>
            {codeforces === null ? 

            <div >
            
            <CompetetiveModal 
            open={codeforces === null} 
            title = "Codeforces Handle Id is not Added" 
            para = "please add your handle Id"
            btncontent = "Add Codeforces handle"

            /> 
            </div>

            : 

            <div className="codeforcesContent">
            <HeaderTypography logoid={1} HeaderContent="Codeforces - Content Page"/>
            {loading ? 
                <Skeleton />
            :
            <div>
            {
                CodeforcesData.map((item, index) =>(
                                    <Codeforcescard key={index} 
                                        id={11} 
                                        contentName="1600 <= Codeforces Rating <= 1699" 
                                        contentProblemCount={100} />))
            }
            </div>
            }
        </div>
            }
        </div>
        
    )
}

export default Codeforces;
