import React, { Component } from 'react'
import {Container, Col, Row, Table, Button} from 'react-bootstrap'
import SearchBox from '../../components/extracomponents/SearchBox'

let mockData = [
    {
        "dateCreated": "Aug 6, 2020", 
        "lastUpdated": "Aug 7, 2020",
        "orderID": 1,
        "product": "OSRS",
        "type": "Buy",
        "amount": 10,
        "rate": 0.5,
        "price": 5.0,
        "paymentMethod":  "PayPal",
        "status": 'Completed',
        "proofOfDelivery": 'File....',
        "customerInformation": "RSN: testRSN, Email: test@mail.com",
        "notes": 'Notes..'
    },
    {
        "dateCreated": "Aug 7, 2020", 
        "lastUpdated": "Aug 8, 2020",
        "orderID": 2,
        "product": "OSRS",
        "type": "Buy",
        "amount": 20,
        "rate": 0.5,
        "price": 10.0,
        "paymentMethod":  "PayPal",
        "status": 'Pending',
        "proofOfDelivery": 'File....',
        "customerInformation": "RSN: testRSN, Email: test@mail.com",
        "notes": 'Notes..'
    },
    {
        "dateCreated": "Aug 5, 2020", 
        "lastUpdated": "Aug 6, 2020",
        "orderID": 3,
        "product": "OSRS",
        "type": "Buy",
        "amount": 40,
        "rate": 0.6,
        "price": 24.0,
        "paymentMethod":  "PayPal",
        "status": 'Completed',
        "proofOfDelivery": 'File....',
        "customerInformation": "RSN: testRSN, Email: test@mail.com",
        "notes": 'Notes..'
    },
    {
        "dateCreated": "Aug 10, 2020", 
        "lastUpdated": "Aug 11, 2020",
        "orderID": 4,
        "product": "OSRS",
        "type": "Sell",
        "amount": 40,
        "rate": 0.6,
        "price": 24.0,
        "paymentMethod":  "PayPal",
        "status": 'Completed',
        "proofOfDelivery": 'File....',
        "customerInformation": "RSN: testRSN, Email: test@mail.com",
        "notes": 'Notes..'
    },
    {
        "dateCreated": "Aug 10, 2020", 
        "lastUpdated": "Aug 11, 2020",
        "orderID": 5,
        "product": "OSRS",
        "type": "Sell",
        "amount": 40,
        "rate": 0.6,
        "price": 24.0,
        "paymentMethod":  "PayPal",
        "status": 'Cancelled',
        "proofOfDelivery": 'File....',
        "customerInformation": "RSN: testRSN, Email: test@mail.com",
        "notes": 'Notes..'
    }
]

class AdminPage extends Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>Admin Portal</h1>
                <Container>
                    <Row>
                        <Col>
                            <h3>Welcome test@test.com</h3>
                        </Col>
                    </Row>
                    
                </Container>
                
                <Container className="my-container">
                    <SearchBox placeholder={"Search for an order, use order ID, name, payment id, or date"}/>
                    <Row className="justify-content-center">
                        <Row>
                            <h3>Pending Orders</h3>
                        </Row>
                        <Row>
                            <Col className="my-column">
                                <Table className="my-table">
                                    <thead>
                                        <tr className="first-column">
                                            <th className="table-column">Date Created</th>
                                            <th className="table-column">Last Updated</th>
                                            <th className="table-column">Order ID#</th>
                                            <th className="table-column">Product</th>
                                            <th className="table-column">Type</th>
                                            <th className="table-column">Amount</th>
                                            <th className="table-column">Rate</th>
                                            <th className="table-column">Price</th>
                                            <th className="table-column">Payment Method</th>
                                            <th className="table-column">Status</th>
                                            <th className="table-column">Customer Information</th>
                                            <th className="table-column">Proof Of Delivery</th>
                                            <th className="table-column">Notes</th>
                                            <th className="table-column">User</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            mockData.map((row) => {   
                                                if(row.status === 'Pending'){     
                                                return (
                                                    <tr className="table-column">
                                                        <td className="row-column">{row.dateCreated}</td>
                                                        <td className="row-column">{row.lastUpdated}</td>
                                                        <td className="row-column">{row.orderID}</td>
                                                        <td className="row-column">{row.product}</td>
                                                        <td className="row-column">{row.type}</td>
                                                        <td className="row-column">{row.amount}</td>
                                                        <td className="row-column">{row.rate}/#</td>
                                                        <td className="row-column">${row.price}</td>
                                                        <td className="row-column">{row.paymentMethod}</td>
                                                        <td className="row-column" style={{backgroundColor: 'darkOrange', fontWeight: 'bold'}}>{row.status}</td>
                                                        <td className="row-column">{row.customerInformation}</td>
                                                        <td className="row-column">{row.proofOfDelivery}</td>
                                                        <td className="row-column">{row.notes}</td>
                                                        <td className="row-column">{row.user}</td>
                                                    </tr>)
                                                }     
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Row>
                            <h3>Order History</h3>  
                        </Row> 
                        <Row>
                            <Col className="my-column">
                                <Table className="my-table">
                                    <thead>
                                        <tr className="first-column">
                                            <th className="table-column">Date Created</th>
                                            <th className="table-column">Last Updated</th>
                                            <th className="table-column">Order ID#</th>
                                            <th className="table-column">Product</th>
                                            <th className="table-column">Type</th>
                                            <th className="table-column">Amount</th>
                                            <th className="table-column">Rate</th>
                                            <th className="table-column">Price</th>
                                            <th className="table-column">Payment Method</th>
                                            <th className="table-column">Status</th>
                                            <th className="table-column">Customer Information</th>
                                            <th className="table-column">Proof Of Delivery</th>
                                            <th className="table-column">Notes</th>
                                            <th className="table-column">User</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            mockData.map(row => {

                                                if(row.status === 'Completed'){
                                                return (
                                                    <tr className="table-column">
                                                        <td className="row-column">{row.dateCreated}</td>
                                                        <td className="row-column">{row.lastUpdated}</td>
                                                        <td className="row-column">{row.orderID}</td>
                                                        <td className="row-column">{row.product}</td>
                                                        <td className="row-column">{row.type}</td>
                                                        <td className="row-column">{row.amount}</td>
                                                        <td className="row-column">{row.rate}/#</td>
                                                        <td className="row-column">${row.price}</td>
                                                        <td className="row-column">{row.paymentMethod}</td>
                                                        <td className="row-column" style={{backgroundColor: 'green'}}>{row.status}</td>
                                                        <td className="row-column">{row.customerInformation}</td>
                                                        <td className="row-column">{row.proofOfDelivery}</td>
                                                        <td className="row-column">{row.notes}</td>
                                                        <td className="row-column">{row.user}</td>
                                                    </tr>
                                                )}else if(row.status === 'Cancelled'){
                                                    return(
                                                    <tr className="table-column">
                                                        <td className="row-column">{row.dateCreated}</td>
                                                        <td className="row-column">{row.lastUpdated}</td>
                                                        <td className="row-column">{row.orderID}</td>
                                                        <td className="row-column">{row.product}</td>
                                                        <td className="row-column">{row.type}</td>
                                                        <td className="row-column">{row.amount}</td>
                                                        <td className="row-column">{row.rate}/#</td>
                                                        <td className="row-column">${row.price}</td>
                                                        <td className="row-column">{row.paymentMethod}</td>
                                                        <td className="row-column" style={{backgroundColor: 'red'}}>{row.status}</td>
                                                        <td className="row-column">{row.customerInformation}</td>
                                                        <td className="row-column">{row.proofOfDelivery}</td>
                                                        <td className="row-column">{row.notes}</td>
                                                        <td className="row-column">{row.user}</td>
                                                    </tr>
                                                    )
                                                }
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AdminPage;