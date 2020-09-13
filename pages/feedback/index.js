import React, {useState} from 'react'
import { Container, Row, Col, Tabs, Tab, Table, Nav} from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ReviewCard from './ReviewCard'

let mockData = 
    [
        {id: 1, reviewName: "testName", message: "Nice Work", category: "trustpilot"},
        {id: 2, reviewName: "testName", message: "Nice Work", category: "misc"},
        {id: 3, reviewName: "testName", message: "Nice Work", category: "misc"},
        {id: 4, reviewName: "testName", message: "Nice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice Work", category: "misc"},
        {id: 5, reviewName: "testName", message: "Nice Work", category: "trustpilot"},
        {id: 6, reviewName: "testName", message: "Nice Work", category: "trustpilot"},
        {id: 7, reviewName: "testName", message: "Nice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice Work", category: "misc"},
        {id: 8, reviewName: "testName", message: "Nice Work", category: "trustpilot"},
        {id: 9, reviewName: "testName", message: "Nice Work", category: "misc"},
        {id: 10, reviewName: "testName", message: "Nice WorkNice WorkNice WorkNice WorkNice WorkNice WorkNice Work", category: "misc"},
        {id: 11, reviewName: "testName", message: "Nice Work", category: "misc"},
    ]

class Feedback extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numOfTrustPilotReviews: 0
        }
    }


    render(){
    

    return (
        <div>
        <Helmet>
            <title>RPGStock | Feedback and Reviews</title>
            <meta name="description" content="RPGStock reputation, feedback, and reviews." />
        </Helmet>
            <Container>
                <Row className="justify-content-center">
                    <h1>Feedback and Reviews </h1>
                </Row>
                <Row>
                    <Col>
                        {/* <!-- TrustBox widget - Starter --> */}
                        <div class="trustpilot-widget" 
                            data-locale="en-US" 
                            data-template-id="5613c9cde69ddc09340c6beb" 
                            data-businessunit-id="5ee44d6942add80001ce3317" 
                            data-style-height="100%" data-style-width="20%" 
                            data-theme="light"
                        >
                        <a href="https://www.trustpilot.com/review/rpgstock.com" target="_blank" rel="noopener noreferrer">Trustpilot</a>
                        </div>
                        {/* <!-- End TrustBox widget --> */}
                         {/* <!-- TrustBox widget - Review Collector --> */}
                            <div class="trustpilot-widget" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="5ee44d6942add80001ce3317" data-style-height="52px" data-style-width="100%">
                                <a href="https://www.trustpilot.com/review/rpgstock.com" target="_blank" rel="noopener noreferrer">Trustpilot</a>
                        </div>
                    {/* <!-- End TrustBox widget --> */}
                    </Col>
                </Row>
                    <Tabs defaultActiveKey="trustpilot" responsive="sm">
                        <Tab eventKey="trustpilot" title="Trustpilot Reviews">
                        <div>
                        <p>Number of Trustpilot Reviews: </p>
                                <Table bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name (date)</th>
                                            <th>Message</th>
                                            <th>Stars</th>
                                            <th>From</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mockData &&
                                            mockData.map((review) => {
                                                if(review.category.toLowerCase() === ("trustpilot")){
                                                   
                                                    return(
                                                        <ReviewCard 
                                                            id={review.id} 
                                                            reviewName={review.reviewName} 
                                                            message={review.message}
                                                            category={review.category}
                                                    />
                                                    )
                                                }
                                               return
                                            }, [])
                                        }
                                    </tbody>
                                </Table>
                            </div>     
                        </Tab>
                        <Tab eventKey="miscellaneous" title="Miscellaneous Reviews">
                            <div>
                                <Table bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Review Name</th>
                                            <th>Message</th>
                                            <th>Stars</th>
                                            <th>Category</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {mockData &&
                                            mockData.map((review) => {
                                                if(review.category.toLowerCase() === ("misc")){
                                                    return(
                                                        <ReviewCard 
                                                            id={review.id} 
                                                            reviewName={review.reviewName} 
                                                            message={review.message}
                                                            category={review.category}
                                                    />
                                                    )
                                                }

                                               return
                                            }, [])
                                        }
                                        
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                    </Tabs>

            </Container>
        </div>
    )
}
}

export default Feedback;
