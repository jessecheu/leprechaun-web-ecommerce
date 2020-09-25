import React from 'react'
import axios from 'axios'

import { Helmet } from 'react-helmet';
import Timestamp from 'react-timestamp'
import { Container} from 'react-bootstrap';

import { attributes, react as TosContent } from '../content/termsofservice.md';

class termsofservice extends React.Component {

    render(){
        const { title, date } = attributes;

    return (
        <div>
            <Helmet>
                <title>RPGStock | Terms of Service</title>
                <meta name="description" content="RPGStock Terms of Service" />
            </Helmet>
            <Container>
                <div style={{textAlign: 'center'}}>
                    <h1>{ title }</h1>
                    <p>Last updated: <Timestamp date={date} /> </p>
                    <p>Please read these terms and conditions carefully before using our service.</p>
                </div>
                    <TosContent />
                <p>If you have any questions about these Terms and Conditions, You can contact us at admin@rpgstock.com</p>
            </Container>
        </div>
    )
    }
}

export default termsofservice;
