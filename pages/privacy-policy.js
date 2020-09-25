import React from 'react'
import axios from 'axios'

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
                <title>{title}</title>
                <meta name="description" content="RPGStock Privacy Policy" />
                </Helmet>
                <div style={{textAlign: 'center'}}>
                    <h1>RPGStock Privacy Policy</h1>
                    <p>Last updated: <Timestamp date={date} /></p>
                </div>
                <Container>
                    {PrivacyContent}
                </Container>
            </div>
        )
    }
}

export default Privacy
