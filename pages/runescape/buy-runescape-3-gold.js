import React from 'react'
import Head from 'next/head';
import { Container, Row, Col, Card } from 'react-bootstrap';
import GeneralInformation from '../../components/layouts/GeneralInformation';
import HowToBegin from '../../components/layouts/HowToBegin.js';
import RWTInformation from '../../components/layouts/RWTInformation';
import RSGPBox from '../../components/extracomponents/RSGPBox'
import {attributes, react as Content} from '../../content/pricingandrates.md'

function BuyRS3() {

    const { rs3rate } = attributes;

    return (
        <>
        {!rs3rate ? (
            <div>
                <h1>Loading... Loading... PLEASE CONTACT SUPPORT IF YOU SEE THIS!</h1>
            </div>
        ) : (
            <>
            <Head>
                <title>RPGStock | Purchase Runescape 3 Gold</title>
                <meta name="description" content="Purchase Runescape 3 Gold at the cheapest rate possible!" />
            </Head>
            <div style={{textAlign: 'center'}}>
                <h1>Buy Runescape 3 Gold</h1>
                < hr />
            </div>
            <Container fluid>
                <Row className="justify-content-center">
                    <RSGPBox title="Runescape 3 Gold" rate={rs3rate}/>
                </Row>
                <Row>
                    <Col xs={4}>
                        
                    </Col>
                    <Col xs={5} className="left-positioned-text">
                        <h2>Process to Purchase Runescape 3 Gold</h2>
                        <p>
                            1. Visit www.rpgstock.com
                            < br/>
                            2. Go into the livechat at the bottom right of the website.
                            < br/>
                            3. Reply to the live chat Using the template below to purchase 
                            Old School Runescape Gold
                            <Card>
                                <Card.Body>         
                                    I would like to purchase Runescape 3. 
                                    < br />                 
                                    Amount of RS3:
                                    < br />
                                    Payment Method: 
                                </Card.Body>
                            </Card>  
                            <div className="bold-text">
                            Choosing Payment Method, We offer many payment methods. 
                            Our most popular ones are PayPal or/and Bitcoin (CryptoCurrency) Click here for more information:
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
                            
                        </Col>
                        <Col xs={5}>
                        <h2>What is Runescape 3 Gold</h2>
                            <p className="left-positioned-text">
                            Runescape 3 is a popular MMORPG and have existed for over two decades. Runescape 3 gold is the
                            currency that people are able to gain when playing the game. Runescape 3 enables you to
                            train your skills more efficiently and achieve more higher tier items. Spirit Shards can also be 
                            as the currency. Each Spirit shard is worth 25gp and it can be exchanged using the Taverely Summoner's
                            guide. www.runescape.com is the game's offical website. Runescape is a different game mode from Old School
                            Runescape but they are both created by Jagex LTD. Runescape 3 is sometimes referred to EOC or Evolution 
                            of combat gold because E.O.C was the change in gamemodes between Runescape and Runescape 3 back in 2014.
                            Many people quit Runescape because they changed the gamemode to E.O.C style combat system. 
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


export default BuyRS3;
