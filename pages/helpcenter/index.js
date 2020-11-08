import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Head from 'next/head'
import Link from 'next/link'

import SearchBox from '../../components/extracomponents/SearchBox'

import Post from '../../components/archive/Post'

function HelpCenter() {
    return (
        <div>
            <Head>
                <title>RPGStock | Help Center</title>
                <meta name="description" content="RPGStock Help Center and frequently asked questions" />
            </Head>
            <Container className="left-positioned-text">
                <br />
                <SearchBox placeholder="How can we help you?"/>
                <Row className="justify-content-center">
                    <p>
                        Frequently Asked Questions <bold className="bold-text">(FAQ)</bold>
                    </p>
                </Row>
                <Container style={{border: '1px solid orange', backgroundColor: 'white'}}>
                    <Row>
                        <Col>
                            <h2>Getting Started</h2>
                            <ul>
                                <li>test</li>
                                <li>test</li>
                                <li>test</li>
                                <li>test</li>
                                <li><Link href="/helpcenter/getting-started">VIEW MORE</Link></li>
                            </ul>
                        </Col>
                        <Col>
                        <h2>Managing Account</h2>
                        <ul>
                                <li>test</li>
                                <li>test</li>
                                <li>test</li>
                                <li>test</li>
                                <li><a href="/">VIEW MORE</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <h2>Games</h2>
                            <ul>
                                <li>test</li>
                                <li>test</li>
                                <li>test</li>
                                <li>test</li>
                                <li><a href="/">VIEW MORE</a></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>Payment Methods</h2>
                            <ul>
                                <li>test</li>
                                <li>test</li>
                                <li>test</li>
                                <li>test</li>
                                <li><a href="/">VIEW MORE</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <Post />
                <Row className="justify-content-center">
                    <h1>Top Articles</h1>
                </Row>
            </Container>
        </div>
    )
}

export default HelpCenter;
