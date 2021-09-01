import React, { useState } from 'react'
import '../../assets/css/codeforces.css';
import HeaderTypography from '../../pageComponents/HeaderTypography';
import SpojQuestionCard from '../../pageComponents/Competitve/Spoj/SpojQuestionCard';
import Skeleton from '../../pageComponents/Competitve/Skeleton';
import '../../assets/css/skeleton.css';

function SpojQuestion() {
    const [loading] = useState(false);
    const SpojData = Array(2).fill('');

    return (
        <div>
            <div className="codeforcesContent">
                <HeaderTypography logoid={2} HeaderContent="SPOJ - Page Name"/>

                {loading ? 
                    <Skeleton />
                :
                <div> 

                { SpojData.map((item, index) =>(
                                    <SpojQuestionCard key={index} 
                                        questionTitle = "Cryptography" 
                                        questionCode="CRYPTO"
                                        questionLink = "https://www.spoj.com/problems/CRYPTO" 
                                        done = {false} />))
                }

            </div>
            }
        </div>
        </div>
    )
}

export default SpojQuestion
