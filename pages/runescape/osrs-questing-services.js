import React from 'react'
import Head from 'next/head';
import {Container, Row, Col, Button, Table} from 'react-bootstrap'

import SearchBox from '../../components/extracomponents/SearchBox'


let mockData = [
    {
        "id": "1",
        "questName": "TestQuest",
        "price": 10
    },
    {
        "id": "2",
        "questName": "TestQuest",
        "price": 20
    },
    {
        "id": "4",
        "questName": "TestQuestTestQuestTestQuestTestQuestTestQuest",
        "price": 20
    },
    {
        "id": "4",
        "questName": "TestQuestTestQuestTestQ",
        "price": 20
    },
    {
        "id": "4",
        "questName": "TestQuestTestQuestTestQ",
        "price": 20.99
    },
]

function RSServicePage(props) {
    return (
        <div>
        <Head>
            <title>RPGStock | Runescape Account Services</title>
            <meta name="description" content="RPGStock Old School Runescape Quest Service" />
        </Head>
        <Container className="my-container">
            <h1>Old School Runescape Questing</h1>
            <SearchBox placeholder={"Search for a Quest..."}/>
            <Row className="justify-content-center"> 
                          
                <Col className="my-column">
                
                    <Table className="my-table">
                        <thead>
                            <tr className="first-column">
                                <th className="table-column">#</th>
                                <th className="table-column">Quest Name</th>
                                <th className="table-column">Price (USD)</th>
                                <th className="table-column">RSGP (07)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mockData.map( (row,i) => (
                                    <tr className="table-column" key={i}>
                                        <td className="row-column">{row.id}</td>
                                        <td className="row-column">{row.questName}</td>
                                        <td className="row-column">$ {row.price}</td>
                                        <td className="row-column">{row.price/0.5}M</td>
                                        <td className="row-column"><Button variant="warning">Buy Now</Button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default RSServicePage;
