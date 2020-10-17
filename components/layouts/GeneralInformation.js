import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ThreeYearLogo from '../../assets/three-year-logo.png';
import ShieldLogo from '../../assets/shields-logo.png';
import LightningPackageLogo from '../../assets/lightning-package-logo.png';

import { attributes } from '../../content/generalinfocomponent.md'

export function GeneralInformation() {

    const  { title, body, pictures } = attributes;
    return (
        <Container fluid>
            <Row>
                <Col xs={4}>

                </Col>
                <Col xs={5}>
                <h2>{title}</h2>
                    <p>
                        {body}
                    </p>
                <center>
                    {/* <img src={ThreeYearLogo} alt="Three Years in the Market Logo" />
                    <img src={ShieldLogo} alt="Shielded transactions" width="200px" height="150px"/>
                    <img src={LightningPackageLogo} alt="Lightning Fast Packages" width="200px" height="150px"/>        */}
                    {pictures && 
                     pictures.map((picture) => {
                         <div>
                             <img src={pictures.picture} alt={picture.alttext} width="200px" height="150px"/>        
                         </div>
                     })}
                </center>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>

                </Col>
                <Col xs={5}>
                <h2>About RPGStock</h2>
                    <p className="left-positioned-text">
                    We sell and buy to everyone in the world. We are located in the USA. 
                    We have over $100k + Sales done and have over 1400 + Feedback on sythe.org.
                    We maintain the lowest rate possible to get you the cheapest cost 
                    in the market. 
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    
                </Col>
                <Col xs={5}>
                <h2>How Do We Ensure the Best Trading Practices</h2>
                    <p>
                        We never purchase blackhat gold such as those who hacked the gold.
                        We do this by not purchasing the gold from known hackers or people
                        who participate in illicit services. We have never received a customer
                        complaint about a ingame rwt ban.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default GeneralInformation;