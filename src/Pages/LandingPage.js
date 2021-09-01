import React from 'react'
import Button from '../components/Button';
import Typography from '../components/Typography';
import Laptop from '../assets/animation/Laptop';
import '../assets/css/LandingPage.css';
import font from '../utilities/font';
import cplogo from '../utilities/cplogo';

function LandingPage() {
    return (
        <div className="LandingPage">
            <div className="LandingPageCard">
                <div className="LandingPageHero">
                    <Typography m="0px 40px 0px 0px " fs="70px" color="white" ff={font.ubuntu}>Start Your Code in Easy Way</Typography>
                    <div className="LandingPageContent">
                        <Laptop></Laptop>
                    </div>
                </div>

                <Typography m="40px 0px 5px 0px " fs="40px" color="white" ff={font.encode}>Get the best Competitve Programming Sorted Question And Videos</Typography>
                <div className="logoimage">
                    {
                        cplogo?.map((image, index) => (
                            <img key={index} src={image} alt="logoimage"/>
                        )
                        )
                    }
                </div>
                
                <Button m="40px" bg="black" h="8vh" w="30%" fs="25px" ff={font.encode} gradient>Register SpeedCode</Button>
            </div>

        </div>
    )
}

export default LandingPage