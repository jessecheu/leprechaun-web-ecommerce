import React from 'react';
import CoinbaseLogo from '../../assets/coinbase-logo.png';
import PaypalAcceptedHere from '../../assets/paypalacceptedhere.png';
import BitcoinAcceptedHere from '../../assets/bitcoinacceptedhere.png';
import SytheLogo from './FooterIcons/sythelogo.png';
import FacebookIcon from '../../assets/socialmediaicons/facebook-icon.png';
import TwitterIcon from '../../assets/socialmediaicons/twitter-icon.png';
import { Container, Row, Col} from 'react-bootstrap';
import { attributes } from '../../content/footercomponent.md'

const Footer = () => {
    const { text, icons, Sections, imagesectiontitle, imagesection } = attributes;
    return(
        <div className="main-footer" style={{padding: '4px', paddingTop: '0px', backgroundColor: 'white'}}>
            <Container>
                <Row>
                    {Sections && 
                        Sections.map((section,k) => (
                            <Col md={3}>
                            <h4>{section.sectiontitle}</h4>
                            <ul className="list-unstyled">
                                {section && section.subsection.map((subsection) =>(
                                    <li><a href={subsection.subsectionurl}>{subsection.subsectiontitle}</a></li>
                                ))
                                }
                            </ul>
                            </Col>
                        ))
                    }
                    <Col md={3}>

                        <h4>{imagesectiontitle}</h4>
                        <li className="list-unstyled">
                            {imagesection &&
                                imagesection.map((imagesection, k) => (
                                    <img src={imagesection.image} alt={imagesection.alttext} width="80px" height="40px"/>
                                ))
                            }
                        </li>
                        <h4>Payment Methods</h4>
                        <ul className="list-unstyled">
                            <li>
                                <img src={CoinbaseLogo} alt="Coinbase Cryptocurrencies Accepted here" width="80px" height="40px"/>
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
                        <p  className="col-sm"> &copy; 2017 - {new Date().getFullYear()} {text}
                            {icons && icons.map((icon, k)=> (
                                <a key={k} target="_target" rel="noopener noreferrer" href={icon.url}><img src={icon.picture} alt={icon.alttext} width="auto" height="25px"/></a>
                            ))}
                        </p>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;
