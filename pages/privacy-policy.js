import React from 'react'
import axios from 'axios'

import Helmet from 'react-helmet'

import { Container} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown'
import Timestamp from 'react-timestamp'

import { apiURL } from '.././utils/apiURL'


class Privacy extends React.Component {
    state={
        fetchedContent: ''
    }

    async componentDidMount(){
        const contentRes = await axios({
            method: 'GET',
            url: `${ apiURL }/privacypolicy-page`
        })
        const fetchedContent = contentRes.data

        this.setState({fetchedContent})

    }

    render(){
        const {fetchedContent} = this.state

        return (
            <div>
                <Helmet>
                <title>RPGStock | Privacy Policy</title>
                <meta name="description" content="RPGStock Privacy Policy" />
                </Helmet>
                <div style={{textAlign: 'center'}}>
                    <h1>RPGStock Privacy Policy</h1>
                    <p>Last updated: <Timestamp date={fetchedContent.updated_at} /></p>
                </div>
                <Container>
                    <ReactMarkdown className="left-positioned-text">
                        {fetchedContent.content}
                    </ReactMarkdown>
                </Container>
            </div>
        )
    }
}

export default Privacy
