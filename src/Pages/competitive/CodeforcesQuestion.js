import React, { useState } from 'react'
import '../../assets/css/codeforces.css';
import HeaderTypography from '../../pageComponents/HeaderTypography';
import CodeforcesQuestionCard from '../../pageComponents/Competitve/Codeforces/CodeforcesQuestionCard';
import Skeleton from '../../pageComponents/Competitve/Skeleton';
import '../../assets/css/skeleton.css';

function CodeforcesQuestion() {
    const [loading] = useState(false);
    const CodeforcesData = Array(2).fill('');

    return (
        <div>
            <div className="codeforcesContent">
                <HeaderTypography logoid={1} HeaderContent="Codeforces - Page Name"/>
                {loading ? 
                    <Skeleton />
                :
                <div> 
                { CodeforcesData.map((item, index) =>(
                                        <CodeforcesQuestionCard key={index} 
                                            id={11} 
                                            questionTitle = "Young Physicist"  
                                            questionDifficulty = {1} 
                                            questionLink = "http://codeforces.com/problemset/problem/69/A" 
                                            done = {false} />
                                    ))
                }
            </div>
            
            }
        </div>
        </div>
    )
}

export default CodeforcesQuestion
