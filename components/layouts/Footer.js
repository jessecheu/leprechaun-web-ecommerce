import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { attributes } from '../../content/footercomponent.md'

const Footer = () => {
    const { text, icons, Sections, imagesectiontitle, imagesection, visualicons } = attributes;
    return(
        <div style={{padding: '4px', paddingTop: '0px', backgroundColor: 'white'}}>
            <Container>
                <Row>
                    {Sections && 
                        Sections.map((section,k) => (
                            <Col md={3} key={k}>
                                <h4>{section.sectiontitle}</h4>
                                <ul className="list-unstyled">
                                    {section.subsection && 
                                        section.subsection.map((subsection, k) =>(
                                            <li><a key={k} href={subsection.subsectionurl}>{subsection.subsectiontitle}</a></li>
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
                                    <img key={k} src={imagesection.image} alt={imagesection.alttext} width="80px" height="40px"/>
                                ))
                            }
                        </li>
                    </Col>
                </Row>
                <hr />
                <Row className="text-center">
                    <p  className="col-sm"> &copy; 2021 - {new Date().getFullYear()} {text}
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
