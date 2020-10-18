import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import { attributes } from '../../content/generalinfocomponent.md'

export function GeneralInformation() {

    const  { title, 
        firstbody, 
        pictures, 
        secondtitle, 
        secondbody, 
        thirdtitle,
        thirdbody } = attributes;
    return (
        <Container fluid>
            <Row>
                <Col xs={4}>

                </Col>
                <Col xs={5}>
                <h2>{title}</h2>
                    <p>
                        {firstbody}
                    </p>
                <center>
                    {pictures.map((picture, k) => (
                        <img key={k} src={picture.picture} alt={picture.alttext} width="200px" height="150px"/>        
                    ))}
                </center>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>

                </Col>
                <Col xs={5}>
                <center><h2>{secondtitle}</h2></center>
                    <p className="left-positioned-text">
                    {secondbody}
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    
                </Col>
                <Col xs={5}>
                <h2>{thirdtitle}</h2>
                    <p>
                        {thirdbody}
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default GeneralInformation;