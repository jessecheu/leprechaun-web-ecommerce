import React from 'react'
import axios from 'axios'

import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown'
import Timestamp from 'react-timestamp'

import { apiURL } from '.././utils/apiURL'

class PaymentMethods extends React.Component{
    state={
        fetchedContent: ''
    }

    async componentDidMount(){
        const contentRes = await axios({
            method: 'GET',
            url: `${apiURL}/paymentmethods`
        })
        const fetchedContent = contentRes.data

        this.setState({fetchedContent})

    }

    render(){
        const {fetchedContent} = this.state

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
                <ReactMarkdown className="left-positioned-text">
                    {fetchedContent.content}
                </ReactMarkdown>
            </Container>
            </div>
        )
    }
}

export default PaymentMethods;
