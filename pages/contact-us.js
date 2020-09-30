import React from 'react'
import { Helmet } from 'react-helmet';
import { Container,Row, Col } from 'react-bootstrap';
import EmailContactForm from './General/EmailContactForm';

function Contact() {
    return (
        <div>
        <Helmet>
            <title>RPGStock | Contact</title>
            <meta name="description" content="Contact RPGStock Adminsitrators with Email" />
            {/* <!-- Begin Mailchimp Signup Form --> */}
        </Helmet>
        <center><h1> Contact US </h1></center>
        < hr />
        <Container>
            <Row>
                <Col>
                    < EmailContactForm />   
                </Col>
            </Row>
            < br />
            < br />
            < br />
            <Row>
                <Col sm={6}>
                    <iframe src="https://discord.com/widget?id=725546040492556389&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </Col>
                <Col md={6}>
                    <h1>Discord</h1>
                    <p className="left-positioned-text">
                        Join us on discord via the widget on the <b>left</b>.
                        You can also add us on Discord manually. 
                    </p>
                    <p >
                        Discord: rpgstock#0777 (case sensitive)
                        < br />
                        UID: 574588629343797257
                        < br />
                        Please beware of Discord impersonators. Use Live Chat to confirm it is indeed us.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col>
                    <center>
                        <h1>Skype</h1>
                        <p>
                            live:pageth (case sensitive)
                            < br />
                            Please beware of Skype impersonators. Use Live Chat to confirm it is indeed us.
                        </p>
                    </center>
                </Col>
            </Row>
        </Container>

        </div>
    )
}

export default Contact;
