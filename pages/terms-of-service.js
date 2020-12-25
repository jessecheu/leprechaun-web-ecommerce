import React from 'react'

import Head from 'next/head';
import Timestamp from 'react-timestamp'
import { Container} from 'react-bootstrap';

import { attributes, react as TosContent } from '../content/termsofservice.md';

class termsofservice extends React.Component {

    render(){
        const { title, date } = attributes;

    return (
        <div>
            <Head>
                <title>Inverted Silo | Terms of Service</title>
                <meta name="description" content="Inverted Silo Terms of Service" />
            </Head>
            <Container>
                <div style={{textAlign: 'center'}}>
                    <h1>{ title }</h1>
                    <p>Last updated: <Timestamp date={date} /> </p>
                    <p>Please read these terms and conditions carefully before using our service.</p>
                </div>
                    <TosContent />
                <p>If you have any questions about these Terms and Conditions, You can contact us at admin@Inverted Silo.com</p>
                <br />
            </Container>
        </div>
    )
    }
}

export default termsofservice;
