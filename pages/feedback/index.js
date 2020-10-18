import React from 'react'
import { Container, Row, Col, Tabs, Tab, Table, Nav} from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ReviewCard from './ReviewCard'
import { attributes } from '../../content/reviews.md';
import TrustPilot from '../../assets/trustpilot-icon.png';
import SytheHeader from './sytheheader.png'

const reviews = attributes.reviews

class Feedback extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        const sortedReviews = reviews.sort((a, b) => b.id - a.id)
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
                    <Col md={6} style={{border: '1px solid black'}}>
                        <center>
                            <h2>Trust Pilot</h2>
                            <hr />
                            <a href="https://www.trustpilot.com/review/rpgstock.com" target="_blank"><img src={TrustPilot} width='125px'/></a>
                            <br />
                            <br />
                        </center>
                            
                    </Col>
                    <Col md={6} style={{border: '1px solid black'}}>
                        <center>
                            <h2>Sythe</h2>
                            <hr />
                            <a href="https://www.sythe.org/members/fyrix.741875/" target="_blank"><img src={SytheHeader} width='400px'/></a>
                            <br />
                            <a href="https://www.sythe.org/threads/fyrixs-vouch-thread-v1-www-rpgstock-com/" target="_blank">Vouch Thread</a>
                            <br />
                        </center>
                    </Col>
                </Row>
                    <Tabs defaultActiveKey="trustpilot" responsive="sm">
                        <Tab eventKey="trustpilot" title="Trustpilot Reviews">
                        <div>
                                <Table bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name (date)</th>
                                            <th>Message</th>
                                            <th>From</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sortedReviews &&
                                            sortedReviews.map((review) => {
                                                if(review.category.toLowerCase() === ("trustpilot")){
                                                   
                                                    return(
                                                        <ReviewCard 
                                                            id={review.id} 
                                                            reviewName={review.name} 
                                                            message={review.message}
                                                            category={review.category}
                                                            publishdate={review.publishdate}
                                                            fromLink = {review.link}
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
                                            <th>Category</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {sortedReviews &&
                                            sortedReviews.map((review) => {
                                                if(review.category.toLowerCase() === ("misc") || 
                                                    review.category.toLowerCase() === ("sythe") ||
                                                    review.category.toLowerCase() === ("osbot") ||
                                                    review.category.toLowerCase() === ("epicnpc")
                                                ){
                                                    return(
                                                        <ReviewCard 
                                                            id={review.id} 
                                                            reviewName={review.name} 
                                                            message={review.message}
                                                            category={review.category}
                                                            publishdate={review.publishdate}
                                                            fromLink = {review.link}
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
