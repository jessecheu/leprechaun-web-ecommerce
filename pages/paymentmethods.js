import React from 'react'
import axios from 'axios'

import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown'
import Timestamp from 'react-timestamp'

import { apiURL } from '.././utils/apiURL'

import { attributes, react as Content } from '../content/paymentmethods.md';

class PaymentMethods extends React.Component{

    render(){
        return (
            <div>
            <Helmet>
                <title>RPGStock | Payment Options</title>
                <meta name="description" content="RPGStock Available Payment Options" />
            </Helmet>
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
