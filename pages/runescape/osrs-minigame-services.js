import React from 'react'
import Head from 'next/head';
import {Container, Row, Col, Button} from 'react-bootstrap'


function RSMinigamePage(props) {
    return (
        <div>
        <Head>
            <title>RPGStock | Runescape Account Services</title>
            <meta name="description" content="RPGStock Old School Runescape Minigame Service" />
        </Head>
        <Container className="my-container">
            <h1>Minigame</h1>
            <Row>
                <Col className="my-column">
                    
                    <p>Test</p>
                </Col>
            </Row>
            
        </Container>
        </div>
    )
}

export default RSMinigamePage;
