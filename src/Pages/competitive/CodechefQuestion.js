import React, { useState } from 'react'
import '../../assets/css/codeforces.css';
import HeaderTypography from '../../pageComponents/HeaderTypography';
import CodeChefQuestionCard from '../../pageComponents/Competitve/CodeChef/CodeChefQuestionCard';
import Skeleton from '../../pageComponents/Competitve/Skeleton';
import '../../assets/css/skeleton.css';

function CodeChefQuestion() {
    const [loading] = useState(false);
    const CodeChefData = Array(2).fill('');

    return (
        <div>
            <div className="codeforcesContent">
                <HeaderTypography logoid={3} HeaderContent="Codechef - Page Name"/>

                {loading ? 
                    <Skeleton />
                :
                <div> 

                { CodeChefData.map((item, index) =>(
                                    <CodeChefQuestionCard key={index} 
                                        questionTitle = "Dakimakura Distribition"  
                                        questionDifficulty = "easy"
                                        questionLink = "https://www.codechef.com/problems/DAKIMAKU" 
                                        done = {false} />))
                }

            </div>
            }
        </div>
        </div>
    )
}

export default CodeChefQuestion
