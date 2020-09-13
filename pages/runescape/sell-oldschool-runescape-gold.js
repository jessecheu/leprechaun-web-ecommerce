import React from 'react'
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card } from 'react-bootstrap';
import GeneralInformation from '../../components/layouts/GeneralInformation';
import HowToBegin from '../../components/layouts/HowToBegin.js';
import RWTInformation from '../../components/layouts/RWTInformation';

function sellosrs() {
    return (
        <div>
        <Helmet>
            <title>RPGStock | Sell Old School Runescape Gold</title>
            <meta name="description" content="Sell Old School Runescape Gold at the best rate possible!" />
        </Helmet>
        <div style={{textAlign: 'center'}}>
            <h1>Sell Old School Runescape Gold</h1>
            < hr/>
        </div>
            <Container fluid>
                <Row>
                    <Col xs={4}>
                        
                    </Col>
                    <Col xs={5} className="left-positioned-text">
                        <h2>Process to Sell Old School Runescape Gold</h2>
                        <p>
                            1. Visit www.rpgstock.com
                            < br/>
                            2. Go into the livechat at the bottom right of the website.
                            < br/>
                            3. Reply to the live chat Using the template below to purchase 
                            Old School Runescape Gold
                            <Card>
                                <Card.Body>         
                                    I would like to Sell 07. 
                                    < br />                 
                                    Amount of 07:
                                    < br />
                                    Payment Method wanted: 
                                </Card.Body>
                            </Card>  
                            <div className="bold-text">
                            Choosing Payment Method, We offer many payment methods. 
                            Our most popular ones are PayPal or/and Bitcoin (CryptoCurrency) Click here for more information:
                            <a href="./PaymentMethods"> Guide to Payment Methods</a>
                            </div> 
                            5. After you talk to the agent and agree to the terms, we will meet ingame for the trade.
                            < br />
                            4. We meet you ingame and then ask you to confirm in the chat that we are trading you.
                            < br />
                            6. We complete the trade.
                            < br />
                            7. You will send the payment information needed for us to send the payment.
                            < br />
                            8. We will then send the payment and you will confirm that you received the payment.
                            < br />
                            9. Finished, we ask that you leave us feedback afterwards to show us what we can work better on.
                            
                        </p>
                    </Col>
                </Row>
            </Container>
            < RWTInformation />
            < GeneralInformation />
            < HowToBegin />
        </div>
    )
}

export default sellosrs;
