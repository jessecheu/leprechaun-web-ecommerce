import React from 'react'
import {Container, Row, Breadcrumb} from 'react-bootstrap'

export default () => {
 
    return(
        <div className="GettingStartedCategory">
            <Container>
                <Row className="justify-content-center">
                    <h1>Getting Started</h1>
                </Row>
                <Row className="justify-content-center">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/helpcenter">Help Center</Breadcrumb.Item>
                        <Breadcrumb.Item href="/helpcenter/getting-started">Getting Started</Breadcrumb.Item>
                    </Breadcrumb> 
                </Row>
                <Row className="justify-content-center">
                    <ul>
                        <li>Link One</li>
                        <li>Link One</li>
                        <li>Link One</li>
                        <li>Link One</li>
                        <li>Link One</li>
                    </ul>
                </Row>
             </Container>
        </div>
    )
}