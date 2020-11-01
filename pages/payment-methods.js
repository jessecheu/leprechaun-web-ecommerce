import React from 'react'

import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';

import { attributes, react as Content } from '../content/paymentmethods.md';

class PaymentMethods extends React.Component{

    render(){
        return (
            <div>
            <Head>
                <title>RPGStock | Payment Method and Options</title>
                <meta name="description" content="RPGStock Available Payment Method and Options" />
            </Head>
            <Container fluid>  
                <Row className="justify-content-center">
                    <h1>Available Payment Methods</h1>
                </Row>
            </Container>
            <Container>
                <Content />
                <br />
            </Container>
            </div>
        )
    }
}

export default PaymentMethods;
