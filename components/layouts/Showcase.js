import React from 'react'
const SearchyName = require('../../assets/userreviews/searchy-name.png');
const SearchyDonorRank = require('../../assets/userreviews/searchy-donorrank.png');
const QBDName = require('../../assets/userreviews/qbd-name.png');
const QBDDonorRank = require('../../assets/userreviews/qbd-donorrank.png');
const AssassinName = require('../../assets/userreviews/assassin-name.png');
const AssassinDonorRank = require('../../assets/userreviews/assassin-donorrank.png');

import { Container, Row, Col, Card } from 'react-bootstrap'

import { attributes } from '../../content/showcasecomponent.md'

export default function Showcase() {
    const { title, card } = attributes;
    return (
        <Container style={{backgroundColor: 'orange'}}>
            <center><h4>{title}</h4></center>
            <Row>
                {card.map((singlecard) => (
                    <Col md={4}>
                        <p>             
                            <a target="_blank" rel="noopener noreferrer" href={singlecard.url}>
                                <img src={singlecard.name} alt={singlecard.namealttext} /><img src={singlecard.donorrank} alt={singlecard.donorrankalttext} />
                            </a>
                            <Card>
                                <Card.Body>{singlecard.message}
                                </Card.Body>
                            </Card>               
                        </p>
                    </Col>                    
                ))}
            </Row>
        </Container>
    )
}
