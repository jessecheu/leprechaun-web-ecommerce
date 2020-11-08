import React from 'react';

import Head from 'next/head';

import HowToBegin from '../components/layouts/HowToBegin';
import GeneralInformation from '../components/layouts/GeneralInformation';

import RSGPBox from '../components/ExtraComponents/RSGPBox'
import OSRSLogo from '../assets/osrs-logo.png'
import RS3Logo from '../assets/rs3-logo.png'


import { Container, Row, Col} from 'react-bootstrap';
import { attributes } from '../content/pricingandrates.md';

import Showcase from '../components/layouts/Showcase'

function Home() {

const {osrsrate, rs3rate} = attributes;


  return (

    <div className="App">
        <Head>
            <title>RPGStock | Buy and Sell Runescape Gold with BTC/PayPal/Cashapp/Venmo/Revolut/ and many more!</title>
            <meta name="description" content="RPGStock | 
            Buy and Sell Runescape Gold with BTC/PayPal/Cashapp/Venmo/Revolut/ 
            and many more! We sell and buy at the best rate possible with trained 
            accounts to minimize risk! We also sell Video Game Giftcards such as 
            Riot Points, Valorant, XBOX, PSN, Blizzard, WoW Gametime, and many others!" />
        </Head>

        {/* <!-- Quick-start- Container --> */}
        <Container className="quickStartContainer">
            <Row className="justify-content-center">
                <Col>
                    <center><img src={OSRSLogo} width="200px"/></center>
                    <RSGPBox title={"Old School Runescape Gold"} rate={osrsrate}/>
                </Col>
                <Col>
                    <center><img src={RS3Logo} width="130px"/></center>
                    <RSGPBox title="Runescape 3 Gold" rate={rs3rate}/>
                </Col>
            </Row>
        </Container>

        <HowToBegin />

        <Container fluid>
            <Row>
                <Col xs={11}> 
                < GeneralInformation />
                </Col>
            </Row>
        </Container>
        <Showcase />

    </div>
  );
}

export default Home;
