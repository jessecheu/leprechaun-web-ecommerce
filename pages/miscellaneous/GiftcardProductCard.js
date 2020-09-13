import React from 'react'
import ReactMarkdown from "react-markdown";

import { Row, Col } from 'react-bootstrap';

export default ({name, description, thumbnail, denomination}) => {
    
    return(
    <div className="GiftcardProductCard">
        <Col md={12}>
            <Row className="justify-content-center">
                <img src={(thumbnail)} width="350px" height="450px"/>
            </Row>
            <br />
            <b>{name}</b>
            <br />
                <p><ReactMarkdown>{description}</ReactMarkdown></p>
                <p>Available Denominations: <b>{denomination}</b></p>    
        </Col>
    </div>
    )
}


