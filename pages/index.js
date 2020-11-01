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
            <title>RPGStock | Home</title>
            <meta name="description" content="RPGStock Home Page / Purchase Runescape Gold Here!" />
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
