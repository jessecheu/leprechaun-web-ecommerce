import React from 'react'
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card } from 'react-bootstrap';

import GeneralInformation from '../../components/layouts/GeneralInformation';
import HowToBegin from '../../components/layouts/HowToBegin.js';
import RWTInformation from '../../components/layouts/RWTInformation';
import RSGPBox from '../../components/ExtraComponents/RSGPBox'
import OSRSLogo from '../../assets/osrs-logo.png';

import { attributes, react as Content } from '../../content/pricingandrates.md';

function BuyOSRS() {

    const {osrsrate} = attributes;

    return (
        <>
        {!osrsrate ? (
            <div>
                <h1>Loading... Loading... PLEASE CONTACT SUPPORT IF YOU SEE THIS!</h1>
            </div>
        ) : (
            <>
            <Helmet>
                <title>RPGStock | Purchase Old School Runescape Gold</title>
                <meta name="description" content="Purchase Old School Runescape Gold at the cheapest rate possible!" />
            </Helmet>
            <h1 style={{textAlign: 'center'}}>Buy Old School Runescape Gold</h1>
            < hr/>
            <Container>
                <Row className="justify-content-center">
                    <RSGPBox title={"Old School Runescape Gold"} rate={osrsrate}/>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col xs={4}>
                        
                    </Col>
                    <Col xs={5}>
                        <h2>Process to Purchase Old School Runescape Gold</h2>
                        <p>
                            1. Visit www.rpgstock.com
                            < br/>
                            2. Go into the livechat at the bottom right of the website.
                            < br/>
                            3. Reply to the live chat Using the template below to purchase 
                            Old School Runescape Gold
                            <Card>
                                <Card.Body>         
                                    I would like to purchase 07. 
                                    < br />                 
                                    Amount of 07:
                                    < br />
                                    Payment Method: 
                                </Card.Body>
                            </Card>  
                            <div>
                            <b>Choosing Payment Method, We offer many payment methods. 
                            Our most popular ones are PayPal or/and Bitcoin (CryptoCurrency) Click here for more information:</b>
                            <a href="./PaymentMethods"> Guide to Payment Methods</a>
                            </div> 
                            4. After you talk to the agent and agree to the terms, you will send the payment method
                            and the agent will confirm that the payment was received.
                            < br />
                            5. We meet you ingame and then ask you to confirm in the chat that we are trading you.
                            < br />
                            6. We complete the trade.
                            < br />
                            7. Finished, we ask that you leave us feedback afterwards to show us what we can work better on.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <img src={OSRSLogo} alt="OSRS Logo"/>
                    </Col>
                    <Col xs={5}>
                    <h2>What is Old School Runescape Gold</h2>
                        <p className="left-positioned-text">
                        Old School Runescape Gold is the virtual currency from the game 
                        WWW.oldschool.runescape.com and the price ranges between 0.50 USD to 1.00 USD. 
                        Players purchase OSRS (07) gold to purchase high valued items and to progress 
                        their player status in the game. OSRS Gold can purchase many things like rare items 
                        and enable you to play at a different level of the game. OSRS GP can also be used to 
                        purchase Membership in the game. Purchasing Oldschool Runescape Gold will make you perform
                        much better at the game interms of efficiency and status because you would be able to afford
                        more upgrades and stats. You can always resell back the gold to us if you ever have a surplus
                        of gold. 
                        </p>
                    </Col>
                </Row>
            </Container>

            < RWTInformation />
            < GeneralInformation />
            < HowToBegin /> 
            </>
        )}
    </>
    )
}

export default BuyOSRS;