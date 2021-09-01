import React, { useState } from 'react';
import '../../assets/css/codeforces.css';
import HeaderTypography from '../../pageComponents/HeaderTypography';
import Codechefcard from '../../pageComponents/Competitve/CodeChef/CodeChefCard';
import Skeleton from '../../pageComponents/Competitve/Skeleton';
import '../../assets/css/skeleton.css';
import CompetetiveModal from '../../pageComponents/Competitve/CompetitveModal';
import { useSelector } from 'react-redux';



function CodeChef() {
    const [loading] = useState(false);
    const User = useSelector((state) => state.auth?.user?.data);
    const Token = useSelector((state) => state.auth?.token);
    const [CodeChefData, setCodeChefData] = useState([]);
    const [codechefid, setcodechefid] = useState(null);

    console.log(User);

    const updateCodeChef = () =>{

    }

    return (
        <div>
            <div>
                {!User?.user?.Codeforcesid && 
                
                <CompetetiveModal 
                open={true} 
                title = "CodeChef Handle Id is not Added" 
                para = "please add your handle Id"
                btncontent = "Add CodeChef handle"
                value ={codechefid}
                onChange= {(e) => setcodechefid(e.target.value)}
                // onClick = {() => updateGfg()}
            /> }
            </div>

            <div className="codeforcesContent">
            <HeaderTypography logoid={3} HeaderContent="CodeChef - Content Page"/>
            {CodeChefData?.length <=0 ? 
                <Skeleton />
            :
            <div> 
            {
                CodeChefData.map((item, index) =>(<Codechefcard key={index} contentName="school" />))
            }
            </div>
            
            }
        </div>
        </div>
    )
}

export default CodeChef
