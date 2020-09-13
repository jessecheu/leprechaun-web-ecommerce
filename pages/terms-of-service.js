import React from 'react'
import axios from 'axios'

import { Helmet } from 'react-helmet';

import ReactMarkdown from 'react-markdown'
import Timestamp from 'react-timestamp'
import { Container} from 'react-bootstrap';

import { apiURL } from '../utils/apiURL'

class termsofservice extends React.Component {
    state={
        fetchedContent: ''
    }

    async componentDidMount(){
        const contentRes = await axios({
            method: 'GET',
            url: `${ apiURL }/tos-page`
        })
        const fetchedContent = contentRes.data

        this.setState({fetchedContent})

    }

    render(){
        const {fetchedContent} = this.state

    return (
        <div>
            <Helmet>
                <title>RPGStock | Terms of Service</title>
                <meta name="description" content="RPGStock Terms of Service" />
            </Helmet>
            <Container>
                <div style={{textAlign: 'center'}}>
                    <h1>Terms and Conditions</h1>
                    <p>Last updated: <Timestamp date={fetchedContent.updated_at} /> </p>
                    <p>Please read these terms and conditions carefully before using our service.</p>
                </div>
                <ReactMarkdown className="left-positioned-text">
                    {fetchedContent.content}
                </ReactMarkdown>
                <p>If you have any questions about these Terms and Conditions, You can contact us at admin@rpgstock.com</p>
            </Container>
        </div>
    )
    }
}

export default termsofservice;
