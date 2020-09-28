import React from 'react'
import ReactMarkdown from "react-markdown";

import { Row, Col } from 'react-bootstrap';

const GiftcardCard =  ({name, description, image, denomination}) => {
    
    return(
    <div className="GiftcardProductCard">
        <Col md={12}>
            <Row className="justify-content-center">
                <img src={(image)} width="350px" height="450px"/>
            </Row>
            <br />
            <center><b>{name}</b></center>
                <p><ReactMarkdown>{description}</ReactMarkdown></p>
                <center>Available Denominations: <b>{denomination}</b></center>
        </Col>
    </div>
    )
}

export default GiftcardCard;


