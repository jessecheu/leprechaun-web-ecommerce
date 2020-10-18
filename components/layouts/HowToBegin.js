import React from 'react'
import { attributes } from "../../content/howtobegincomponent.md"

import {Container, Col, Row} from 'react-bootstrap'

export const HowToBegin = () => {
    const { title, sections } = attributes;
    return (
        <div>
         {/*  How to Begin Component */}
         <div className="sub-body">
         <hr/>
                 <Container>
                    <Row>
                        <Col md={12}>
                            <center><h1 className="title">{title}</h1></center>
                        </Col>
                        {sections.map((section) => (
                                <Col md={3}>
                                    <center><img src={section.picture} alt={section.alttext} height="100px" width="100px"/></center>
                                    <h6>
                                        {section.text}
                                    </h6>
                                    <center><img src={section.subpicture} alt={section.subalttext}  width="100px"/></center>
                                </Col>
                        ))}                  
                    </Row>
                </Container> 
            </div>
        </div>
    )
}

export default HowToBegin;
