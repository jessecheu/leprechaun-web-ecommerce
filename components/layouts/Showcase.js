import React from 'react'

import { Container, Row, Col, Card } from 'react-bootstrap'

import { attributes } from '../../content/showcasecomponent.md'

export default function Showcase() {
    const { title, card } = attributes;
    return (
        <Container style={{backgroundColor: 'orange'}}>
            <center><h4>{title}</h4></center>
            <Row>
                {card.map((singlecard, k) => (
                    <Col md={4} key={k}>
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
