import React from 'react'
import Button from '../../UiComponent/Button';
import Typography from '../../UiComponent/Typography';
import Logo from '../../UiComponent/Logo';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="LandingPage">
            
            <div>
                <div className="LandingPageLogo">
                <Logo imgs="60px" m="10px"/>
                <Typography fs ="40px" gradient >SwiftCode</Typography>
                </div>
                
                <Typography fs ="40px" color="white" >Start Your Code in Easy Way</Typography>
                <Button bg="black" h="8vh" w="25%" fs="25px" gradient>Register SwiftCode</Button>
            </div>

        </div>
    )
}

export default LandingPage
