import React from 'react'

import Helmet from 'react-helmet'
import { Container} from 'react-bootstrap';
import Timestamp from 'react-timestamp'

import { attributes, react as PrivacyContent } from '../content/privacypolicy.md';


class Privacy extends React.Component {

    render(){
        const { title, date } = attributes;
        return (
            <div>
                <Helmet>
                    <title>RPGStock | Privacy Page</title>
                    <meta name="description" content="RPGStock Privacy Policy" />
                </Helmet>
                <Container>
                <div style={{textAlign: 'center'}}>
                    <h1>{title}</h1>
                    <p>Last updated: <Timestamp date={date} /></p>
                </div>
                    <PrivacyContent />
                <br />
                </Container>
            </div>
        )
    }
}

export default Privacy;
