import React from 'react'
import Button from '../../UiComponent/Button';
import Typography from '../../UiComponent/Typography';
import Laptop from '../../assets/animation/Laptop';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="LandingPage">

            <div>

                <div className="LandingPageHero">
                    <div className="LandingPageContent">
                       <Typography fs="50px" color="white" >Start Your Code in Easy Way</Typography>
                    </div>
                    <div className="LandingPageImg">
                        <Laptop></Laptop>
                    </div>
                </div>
                        <Button bg="black" h="8vh" w="25%" fs="25px" gradient>Register SwiftCode</Button>
            </div>

        </div>
    )
}

export default LandingPage
