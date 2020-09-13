import React, { useContext } from 'react'

import { UserContext } from '../utils/UserContext'

import {Container, Row, Col, Button,ButtonGroup, Card} from 'react-bootstrap'
import util from "../components/ExtraComponents/util.js"

import Router from 'next/router'


class Checkout extends React.Component{
    state = {
        product: "",
        amountOfProduct: '',
        rateOfProduct: '',
        fees: '',
        price: "",
        paymentMethod: "",
        registeredUserName: "",
        email: "",
        characterName: "",
        couponCode: "N/A",
    }

    static contextType = UserContext


    feesChange = (e) => {

    }

    onChangePaymentMethod = e => {
        const {amountOfProduct, rateOfProduct, fees} = this.state
        let localFees = 0;
        if(e.target.value === 'Bitcoin (BTC)'){
            localFees = 0;
            this.setState({fees: 0})
        }else if(e.target.value === 'Cashapp Balance'){
            localFees = 10;
            this.setState({fees: 10})
        }else if(e.target.value === 'Venmo Balance'){
            localFees = 15;
            this.setState({fees: 15})
        }else if(e.target.value === 'Zelle'){
            localFees = 5;
            this.setState({fees: 5})
        }
        this.setState({paymentMethod : e.target.value, price: util.formatNumber(parseFloat((amountOfProduct*rateOfProduct)+localFees)) });
    }


    componentDidMount(){
        console.log("Checkout.componentDidMount props",this.props)
        const {user} = this.context
        console.log("Checkout.componentDidMount user", user)
        console.log(user.title)
        if(user.title === undefined){
            Router.push({
                pathname: '/404'
            })
        }
        if(user){
            this.setState({
                product: user.title,
                amountOfProduct: user.amount,
                rateOfProduct: user.rate,
                price: user.amount*user.rate,
                characterName: user.characterName,
                email: user.email
            })
        }
    }



    render(){
        const {product, amountOfProduct, 
        rateOfProduct, fees, price, paymentMethod, 
        registeredUserName, email, characterName, couponCode} = this.state

    
        return(
            <>

            <Container>
            <Row className="justify-content-center">
                <h2>Guarranted SAFE Checkout</h2>
            </Row>
            <Row className="justify-content-center">
                <img alt={"Guarranted Safe Checkout Logo"} />
            </Row>
            <Row className="justify-content-center">
                <h4>Checkout - Summary - </h4>
            </Row>
            </Container>
            <Container style={{backgroundColor: "orange", paddingTop: '20px', border: '1px solid black'}}>
                <Row>
                    <Col md={6}>
                        
                        <Col md={12}>
                            <ul style={{textAlign: 'left', fontSize: '1.5rem'}}>
                                <li><h5><b>Order Information</b></h5></li>
                                <li style={{borderBottom: '1px solid grey', borderTop: '1px solid grey'}}>Product:     <a style={{textAlign: 'left', fontWeight: 'bold'}}>{product}</a></li>
                                <li style={{borderBottom: '1px solid grey'}}>Amount:     <a style={{textAlign: 'left', fontWeight: 'bold'}}>{amountOfProduct}</a></li>
                                <li style={{borderBottom: '1px solid grey'}}>Rate:      <a style={{textAlign: 'left', fontWeight: 'bold'}}>{rateOfProduct}/m</a></li>
                                <li style={{borderBottom: '1px solid grey'}}>Fees:     <a style={{textAlign: 'left', fontWeight: 'bold'}}>${fees}</a></li>
                                <li style={{borderBottom: '1px solid grey'}}>Price:     <a style={{textAlign: 'left', fontWeight: 'bold'}}>${price}</a></li>
                                <li style={{borderBottom: '1px solid grey'}}>Payment Method:      <a style={{textAlign: 'left', fontWeight: 'bold'}}>{paymentMethod} </a></li>
                                <li style={{borderBottom: '1px solid grey'}}>Checkout as Guest or <a href="/login" style={{color: 'Blue'}}>Log in</a>     <a style={{textAlign: 'left', fontWeight: 'bold'}}>{registeredUserName} </a></li>
                                <li style={{borderBottom: '1px solid grey'}}>Email:    <a style={{textAlign: 'left', fontWeight: 'bold'}}>{email} </a></li>
                                <li style={{borderBottom: '1px solid grey'}}>Character Name:     <a style={{textAlign: 'left', fontWeight: 'bold'}}>{characterName} </a></li>
                                <li style={{borderBottom: '1px solid grey'}}>Coupon Code?:     <a style={{textAlign: 'left', fontWeight: 'bold'}}>{couponCode}</a></li>
                            </ul>
                        </Col>                   
                    </Col>
                    <Col md={6}>
                        <Row className="justify-content-center">
                            <h5><b>Select Payment Method</b></h5>
                            <div style={{textAlign: "right", paddingLeft: "150px"}}>
                                <select>
                                    <option>All Countries</option>
                                </select>  
                            </div>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <label>
                                    <Card style={{ width: '10rem' }}>
                                        <Card.Body>
                                            <Card.Title>Bitcoin</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                    <input 
                                        name="payment-group"
                                        type="radio" 
                                        value="Bitcoin (BTC)" 
                                        checked={paymentMethod === "Bitcoin (BTC)"}
                                        onChange={this.onChangePaymentMethod} 
                                        defaultChecked
                                    />  
                                </label>           
                            </Col>
                            <Col md={4}>
                                <label>
                                    <Card style={{ width: '10rem' }}>
                                        <Card.Body>
                                            <Card.Title>Cashapp</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                    <input
                                        name="payment-group" 
                                        type="radio" 
                                        value="Cashapp Balance" 
                                        checked={paymentMethod === "Cashapp Balance"}
                                        onChange={this.onChangePaymentMethod} 
                                    />  
                                </label>           
                            </Col>
                            <Col md={4}>
                                <label>
                                    <Card style={{ width: '10rem' }}>
                                        <Card.Body>
                                            <Card.Title>Venmo</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                    <input
                                        name="payment-group" 
                                        type="radio" 
                                        value="Venmo Balance" 
                                        checked={paymentMethod === "Venmo Balance"}
                                        onChange={this.onChangePaymentMethod} 
                                    />  
                                </label>           
                            </Col>
                            <Col md={4}>
                                <label>
                                    <Card style={{ width: '10rem' }}>
                                        <Card.Body>
                                            <Card.Title>Zelle</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                    <input
                                        name="payment-group" 
                                        type="radio" 
                                        value="Zelle" 
                                        checked={paymentMethod === "Zelle"}
                                        onChange={this.onChangePaymentMethod} 
                                    />  
                                </label>           
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{backgroundColor: 'yellow'}}>
                    <p>
                        Please make sure that your Character Name and Email is correct as you will need it in the future.
                        <br />
                        Character Name: <b>{characterName}</b>
                        <br />
                        Email: <b>{email}</b>
                    </p>
                    
                </Row>
                <Row className="justify-content-center">
                    <Button size="lg" style={{width: '450px', height: '100px', fontSize: '45px', fontWeight: 'bold'}} variant="warning">
                            Checkout ( ${price} )
                    </Button>
                </Row>
                <br />
            </Container>
            </>
        )
    }
}

export default Checkout;