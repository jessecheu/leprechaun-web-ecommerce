import React from 'react'
import { Helmet } from 'react-helmet';
import {Container, Row, Col, Button} from 'react-bootstrap'

import "./RSServiceDesign.css";

function RSMinigamePage(props) {
    return (
        <div>
        <Helmet>
            <title>RPGStock | Runescape Account Services</title>
            <meta name="description" content="RPGStock Old School Runescape Minigame Service" />
        </Helmet>
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
