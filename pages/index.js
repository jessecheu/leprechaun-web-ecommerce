import React from 'react';
import HowToBegin from '../components/layouts/HowToBegin';
import GeneralInformation from '../components/layouts/GeneralInformation';
const SearchyName = require('../assets/userreviews/searchy-name.png');
const SearchyDonorRank = require('../assets/userreviews/searchy-donorrank.png');
const QBDName = require('../assets/userreviews/qbd-name.png');
const QBDDonorRank = require('../assets/userreviews/qbd-donorrank.png');
const AssassinName = require('../assets/userreviews/assassin-name.png');
const AssassinDonorRank = require('../assets/userreviews/assassin-donorrank.png');

import RSGPBox from '../components/ExtraComponents/RSGPBox'
import OSRSLogo from '../assets/osrs-logo.png'
import RS3Logo from '../assets/rs3-logo.png'


import { Container, Row, Col, Card, ListGroup} from 'react-bootstrap';
import { attributes, react as Content } from '../content/pricingandrates.md';

function Home() {

const {osrsrate, rs3rate} = attributes;


  return (

    <div className="App">

        {/* <!-- Quick-start- Container --> */}
        <Container className="quickStartContainer">
            <Row className="justify-content-center">
                {/* <Col>
                    <Card style={{  }}>
                    <Card.Header>Runescape</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{backgroundColor: 'red', fontSize: '2rem', fontWeight: 'bold'}}><a href="/runescape/buy-oldschool-runescape-gold">Purchase OSRS</a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'blue', fontSize: '2rem', fontWeight: 'bold'}}><a href="/runescape/buy-runescape-3-gold">Purchase RS3</a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'green', fontSize: '2rem', fontWeight: 'bold'}}><a href="/runescape/sell-oldschool-runescape-gold">Sell RS</a></ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col>
                <Card style={{  }}>
                <Card.Header>Misc</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{backgroundColor: 'purple', fontSize: '2rem', fontWeight: 'bold'}}><a href="/miscellaneous/video-game-giftcards">Purchase Discounted Video Game Giftcards</a></ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col> */}
                <Col>
                    <center><img src={OSRSLogo} width="200px"/></center>
                    <RSGPBox title={"Old School Runescape Gold"} rate={osrsrate}/>
                </Col>
                <Col>
                    <center><img src={RS3Logo} width="130px"/></center>
                    <RSGPBox title="Runescape 3 Gold" rate={rs3rate}/>
                </Col>
            </Row>
        </Container>

        <HowToBegin />

        <Container fluid>
            <Row>
                <Col xs={11}> 
                < GeneralInformation />
                </Col>
            </Row>
        </Container>

        {/* <!-- Body --> */}
            <div className="container text-center p-1 my-reviewsection">
                <h4>Few Reviews Of Sythe.org's Most Trusted</h4>
                <div className="row">
                      <div className="col-md-4 my-column">
                          <p>             
                                <a target="_blank" rel="noopener noreferrer" href="https://www.sythe.org/threads/fyrixs-vouch-thread/#post-30492611">
                                    <img src={SearchyName} alt="SearchyReview" /><img src={SearchyDonorRank} alt="SearchyDonorRank" />
                                </a>
                                <Card>
                                    <Card.Body>"Huge vouch for this man, bought 6b+ 07 off him over the course of a few months. 
                                        Always friendly and easy to deal with,
                                         much appreciated!" (May 6, 2018)</Card.Body>
                                </Card>               
                          </p>
                      </div>
                      <div className="col-md-4 my-column">
                      <p>             
                            <a target="_blank" rel="noopener noreferrer" href="https://www.sythe.org/threads/fyrixs-vouch-thread/#post-30769035">
                                <img src={QBDName} alt="QBDReview" /><img src={QBDDonorRank} alt="QBDDonorRank" />
                            </a>                              
                            <Card>
                                <Card.Body>"sold me a WHOPPING 1.3b osrs, excellent trading practices, 
                                    tyvm for choosing me :D" (May 23, 2018)</Card.Body>
                            </Card>
                          </p>
                      </div>
                      <div className="col-md-4 my-column">
                      <p>             
                            <a target="_blank" rel="noopener noreferrer" href="https://www.sythe.org/threads/fyrixs-vouch-thread/page-69#post-43689319">
                                <img src={AssassinName} alt="AssassinReview" /><img src={AssassinDonorRank} alt="AssassinDonorRank" />
                            </a>                              
                            <Card>
                                <Card.Body>"Sold him another 500m 07 quick and easy thanks man!" (May 19, 2020)</Card.Body>
                            </Card>
                          </p>
                      </div>
                </div>
            </div>
        <Container>
        </Container>

    </div>
  );
}

export default Home;
