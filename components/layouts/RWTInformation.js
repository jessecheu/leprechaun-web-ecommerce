import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import GamingLogo from '../../assets/gaminglogo.png';

function RWTInformation() {
    return (
        <div>
        <Container fluid>
            <Row>
                <Col xs={4}>
                    <img src={GamingLogo} alt="GamingLogo"/>
                </Col>
                <Col xs={5}>
                <h2>Runescape: How do we prevent Real-World-Trade Bans?</h2>
                    <p className="left-positioned-text">
                    Although the risk is a very low risk to a Real World Trade ban, they do happen
                    to traders that trade often. A Real World Trade ban is a ban from the game by
                    the game creator because it is against the game's policy to trade gold or items for real
                    money. Jagex does this to protect themselves from lawsuits that arise if they 
                    deem these virtual items as real world value. We protect our customers by doing the
                    following:
                    </p>
                    <ol>
                        <li className="left-positioned-text">We use aged accounts, most of our accounts are over 1 Year old</li>
                        <li className="left-positioned-text">Our Accounts are trained, we will never use lvl 3 accounts to trade you</li>
                        <li className="left-positioned-text">Our Accounts are quested, we will complete quests on the accounts we trade you on</li>
                        <li className="left-positioned-text">Our Accounts are Level 40 plus in combat.</li>
                        <li className="left-positioned-text">If requested, we can offer other alternative ways to trade such as Stake Transfer, tipjar, droptrade, or killtrade. 
                        Contact for different ways to trade, we are very flexible.</li>
                    </ol>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default RWTInformation;
