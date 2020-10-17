import React from 'react'
// import './HowToBegin.css';
import GettingStartedPicture from './HowToBeginPictures/getting-started-picture.png';
import OrangeArrow from './HowToBeginPictures/orangearrow.png';
import OrangeNotepad from './HowToBeginPictures/orangenotepad.png';
import AgreementPicture from './HowToBeginPictures/agreement.png';

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
                        {/*<div className="row">
                            
                            <div className="col-md-1">
                                <img className="arrowimage" alt="" src={OrangeArrow} width="100px"/>
                            </div>
                            <div className="col-md-3">
                                <img src={OrangeNotepad} alt="" width="100px"/>
                                <h6>
                                    Simply State what you want to buy or sell
                                    and which payment method you are looking for.
                                </h6>
                            </div>
                            <div className="col-md-1">
                                <img className="arrowimage" alt="" src={OrangeArrow} width="100px"/>
                            </div>
                            <div className="col-md-3">
                                <img src={AgreementPicture} alt="Agreement" width="100px"/>
                                <h6>
                                    We both agree to the terms of the trade and then proceed
                                    with the trade.
                                </h6>
                            </div>
                            <div className="col-md-1">
                                <img className="arrowimage" alt="" src={OrangeArrow} width="100px"/>
                            </div>
                        
                            <div className="col-md-4">
                                <img src={AgreementPicture} alt="Agreement" width="100px"/>
                                <h6>
                                    We complete the trade by trading the goods or service on 
                                    the terms that we agreed to.
                                </h6>
                            </div>  
                        </div>   */}                       
                    </Row>
                </Container> 
            </div>
        </div>
    )
}

export default HowToBegin;
