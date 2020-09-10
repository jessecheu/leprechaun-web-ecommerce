import React from 'react';
import CoinbaseLogo from '../../assets/coinbase-logo.png';
import PaypalAcceptedHere from '../../assets/paypalacceptedhere.png';
import BitcoinAcceptedHere from '../../assets/bitcoinacceptedhere.png';
import SytheLogo from './FooterIcons/sythelogo.png';
import FacebookIcon from '../../assets/socialmediaicons/facebook-icon.png';
import TwitterIcon from '../../assets/socialmediaicons/twitter-icon.png';
import { Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
    return(
        <div className="main-footer" style={{padding: '4px', paddingTop: '0px', backgroundColor: 'red'}}>
            <Container>
                <Row>
                    {/* Column1 */}
                    <Col md={3}>
                        <h4>RPGStock</h4>
                        <ul className="list-unstyled">
                            <li><a href="/aboutus">About us</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/feedback">Feedback</a></li>
                        </ul>
                    </Col>
                    {/* Column2 */}
                    <Col md={3}>
                        <h4>Support</h4>
                        <ul className="list-unstyled">
                            <li><a href="/helpcenter">Help Center</a></li>
                            <li><a href="/paymentmethods">Payment Methods</a></li>
                            <li><a href="/contact-us">Contact Us</a></li>
                        </ul>
                    </Col>
                    {/* Column3 */}
                    <Col md={3}>
                        <h4>Legal</h4>
                        <ul className="list-unstyled">
                            <li><a href="/terms-of-service">Terms of Service</a></li>
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                        </ul>
                    </Col>
                    {/* Column4 */}
                    <Col md={3}>
                        <h4>Payment Methods</h4>
                        <ul className="list-unstyled">
                            <li>
                                <img src={CoinbaseLogo} alt="Coinbase Cryptocurrencies Accepted here" width="120px" height="50px"/>
                                <img src={PaypalAcceptedHere} alt="PayPal Accepted Here" width="80px" height="40px"/>
                                <img src={BitcoinAcceptedHere} alt="Bitcoin Accepted Here" width="80px" height="40px"/>
                                <br />
                                {/* <img src={AndMore} alt="And More Payment methods Accepted" width="80px" height="40px"/> */}
                            </li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row className="text-center">
                        <p  className="col-sm"> &copy;{new Date().getFullYear()} RPGStock | 
                        Buy and Sell Video Game Items | All Rights Reserved |
                        <a target="_target" rel="noopener noreferrer" href="https://www.facebook.com/RPGStock"><img src={FacebookIcon} alt="Facebook icon" width="auto" height="45px"/></a>
                        <a target="_target" rel="noopener noreferrer" href="#"><img src={TwitterIcon} alt="Twitter icon" width="auto" height="45px"/></a>
                        <a target="_target" rel="noopener noreferrer" href="http://sythe.org/register.php?do=register&r=741875"><img src={SytheLogo} alt="SytheLogo" width="75px"/></a>
                        </p>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;
