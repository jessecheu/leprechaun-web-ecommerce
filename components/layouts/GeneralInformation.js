import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ThreeYearLogo from '../../assets/three-year-logo.png';
import ShieldLogo from '../../assets/shields-logo.png';
import LightningPackageLogo from '../../assets/lightning-package-logo.png';

export function GeneralInformation() {
    return (
        <Container fluid>
            <Row>
                <Col xs={4}>

                </Col>
                <Col xs={5}>
                <h2>Why you can trust and choose RPGStock</h2>
                    <p>
                        RPGStock has been operating in this market for over three years and we strive
                        to provide the safest place to purchase Old School Runescape. You are shielded, We 
                        use only the best trained accounts and you will only get the best service. The delivery
                        and updates are almost constantly updated and lightning fast. 
                    </p>
                <center>
                    <img src={ThreeYearLogo} alt="Three Years in the Market Logo" />
                    <img src={ShieldLogo} alt="Shielded transactions" width="200px" height="150px"/>
                    <img src={LightningPackageLogo} alt="Lightning Fast Packages" width="200px" height="150px"/>       
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