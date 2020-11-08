import React from 'react'
import { UserContext } from '../utils/UserContext'
import {Container, Row, Col, Button, ButtonGroup, Card} from 'react-bootstrap'
import util from "../components/extracomponents/util.js"

import Router from 'next/router'

import BitcoinIcon from '../assets/icons/bitcoin-icon.png'
import EthereumIcon from '../assets/icons/ethereum-icon.png'
import LitecoinIcon from '../assets/icons/litecoin-icon.png'
import XRPIcon from '../assets/icons/xrp-icon.png'
import PayPalIcon from '../assets/icons/paypal-icon.png'
import CashappIcon from '../assets/icons/cashapp-icon.png';
import VenmoIcon from '../assets/icons/venmo-icon.png'
import ZelleIcon from '../assets/icons/zelle-icon.png';
import RevolutIcon from '../assets/icons/revolut-icon.png';

import PaymentMethodModal from '../components/extracomponents/PaymentMethodModal'



class Checkout extends React.Component{
    state = {
        product: "",
        amountOfProduct: '',
        rateOfProduct: '',
        fees: '',
        estimateFee: '',
        price: "",
        updatedRate: '',
        paymentMethod: "",
        registeredUserName: "",
        email: "",
        characterName: "",
        couponCode: "N/A",
        modalShow: false
    }

    static contextType = UserContext

    onChangePaymentMethod = e => {
        const {amountOfProduct, rateOfProduct, price, fees} = this.state
        let localPrice = amountOfProduct * rateOfProduct;
        let localFees = 0;
        if(e.target.value === 'Bitcoin (BTC)' || 
            e.target.value === 'Ethereum (ETH)' || 
            e.target.value === 'Litecoin (LTC)' ||
            e.target.value === 'XRP (XRP)' ){
            localFees = 0;
        }else if(e.target.value === 'Cashapp Balance'){
            const cashappfee = 1.22; 
            localFees = ((localPrice)*cashappfee)-localPrice; 
        }else if(e.target.value === 'PayPal'){
            const paypalfee = 1.22; 
            localFees = ((localPrice)*paypalfee)-localPrice; 
        }else if(e.target.value === 'Venmo Balance'){
            const venmofee = 1.22;
            localFees = ((localPrice)*venmofee)-localPrice; 
        }else if(e.target.value === 'Revolut'){
            const revolutfee = 1.22;
            localFees = ((localPrice)*revolutfee)-localPrice; 
        }else {
            localFees = ((localPrice)*1)-localPrice; 
        }
        localFees = parseFloat(localFees.toFixed(3))
        const afterprice = util.formatNumber(parseFloat((localPrice)+localFees))
        const updatedRate = parseFloat(afterprice/amountOfProduct).toFixed(3);
        this.setState({paymentMethod : e.target.value, price: afterprice, estimatedFee: localFees, updatedRate: updatedRate });
    }


    componentDidMount(){
        const {user} = this.context
        console.log(user.title)
        if(user.title === undefined){
            Router.push({
                pathname: '/'
            })
        }
        if(user){
            this.setState({
                product: user.title,
                amountOfProduct: util.formatNumber(user.amount),
                rateOfProduct: user.rate,
                price: util.formatNumber(user.amount*user.rate),
                characterName: user.characterName,
                email: user.email
            })
        }
    }



    render(){
        const {product, amountOfProduct, 
        rateOfProduct, fees, estimatedFee, price, updatedRate, paymentMethod, 
        registeredUserName, email, characterName, couponCode, modalShow} = this.state
    
        return(
            <>

            <Container>
            <Row className="justify-content-center">
                <h2>Guarranted SAFE Checkout</h2>
            </Row>
            <Row className="justify-content-center">
                {/* <img alt={"Guarranted Safe Checkout Logo"} /> */}
            </Row>
            <Row className="justify-content-center">
                {/* <h4>Checkout - Summary - </h4> */}
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
                                <li style={{borderBottom: '1px solid grey'}}>Fees:     <a style={{textAlign: 'left', fontWeight: 'bold'}}>${estimatedFee}</a></li>
                                <li style={{borderBottom: '1px solid grey'}}>Price:     <a style={{textAlign: 'left', fontWeight: 'bold'}}>${price}</a></li>
                                <li style={{borderBottom: '1px solid grey'}}>Updated Rate:     <a style={{textAlign: 'left', fontWeight: 'bold'}}>{updatedRate}/m</a></li>
                                <li style={{borderBottom: '1px solid grey'}}>Payment Method:      <a style={{textAlign: 'left', fontWeight: 'bold'}}>{paymentMethod} </a></li>
                                {/* <li style={{borderBottom: '1px solid grey'}}>Checkout as Guest or <a href="/login" style={{color: 'Blue'}}>Log in</a>     <a style={{textAlign: 'left', fontWeight: 'bold'}}>{registeredUserName} </a></li> */}
                                <li style={{borderBottom: '1px solid grey'}}>Email:    <a style={{textAlign: 'left', fontWeight: 'bold'}}>{email} </a></li>
                                <li style={{borderBottom: '1px solid grey'}}>Character Name:     <a style={{textAlign: 'left', fontWeight: 'bold'}}>{characterName} </a></li>
                                <li style={{borderBottom: '1px solid grey'}}>Coupon Code?:     <a style={{textAlign: 'left', fontWeight: 'bold'}}>{couponCode}</a></li>
                            </ul>
                            <div>
                                <p>*Recommended Payment Method: BTC or Cashapp* Visit 
                                    <a href="http://localhost:3000/paymentmethods" target="_blank" style={{color: 'blue'}}> Payment Method Page </a> 
                                    for more information.
                                </p>
                            </div>
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
                                    <Card style={{ width: '10rem', height: '8rem'  }}>
                                        <Card.Body>
                                            <center>
                                                <Card.Title>Bitcoin (BTC)</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted"><img src={BitcoinIcon} width="40px"/></Card.Subtitle>
                                            </center>
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
                                    <Card style={{ width: '10rem', height: '8rem' }}>
                                        <Card.Body>
                                            <center>
                                                <Card.Title>Ethereum (ETH)</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted"><img src={EthereumIcon} width="40px"/></Card.Subtitle>
                                            </center>
                                        </Card.Body>
                                    </Card>
                                    <input 
                                        name="payment-group"
                                        type="radio" 
                                        value="Ethereum (ETH)" 
                                        checked={paymentMethod === "Ethereum (ETH)"}
                                        onChange={this.onChangePaymentMethod} 
                                        defaultChecked
                                    />  
                                </label>           
                            </Col>
                            <Col md={4}>
                                <label>
                                    <Card style={{ width: '10rem', height: '8rem' }}>
                                        <Card.Body>
                                            <center>
                                                <Card.Title>Litecoin (LTC)</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted"><img src={LitecoinIcon} width="40px"/></Card.Subtitle>
                                            </center>
                                        </Card.Body>
                                    </Card>
                                    <input 
                                        name="payment-group"
                                        type="radio" 
                                        value="Litecoin (LTC)" 
                                        checked={paymentMethod === "Litecoin (LTC)"}
                                        onChange={this.onChangePaymentMethod} 
                                        defaultChecked
                                    />  
                                </label>           
                            </Col>
                            <Col md={4}>
                                <label>
                                    <Card style={{ width: '10rem', height: '8rem' }}>
                                        <Card.Body>
                                            <center>
                                                <Card.Title>XRP (XRP)</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted"><img src={XRPIcon} width="40px"/></Card.Subtitle>
                                            </center>
                                        </Card.Body>
                                    </Card>
                                    <input 
                                        name="payment-group"
                                        type="radio" 
                                        value="XRP (XRP)" 
                                        checked={paymentMethod === "XRP (XRP)"}
                                        onChange={this.onChangePaymentMethod} 
                                        defaultChecked
                                    />  
                                </label>           
                            </Col>
                            <Col md={4}>
                                <label>
                                    <Card style={{ width: '10rem', height: '8rem'  }}>
                                        <Card.Body>
                                            <center>
                                                <Card.Title>PayPal</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted"><img src={PayPalIcon} width="60px"/></Card.Subtitle>
                                            </center>
                                        </Card.Body>
                                    </Card>
                                    <input
                                        name="payment-group" 
                                        type="radio" 
                                        value="PayPal" 
                                        checked={paymentMethod === "PayPal"}
                                        onChange={this.onChangePaymentMethod} 
                                    />  
                                </label>           
                            </Col>
                            <Col md={4}>
                                <label>
                                    <Card style={{ width: '10rem', height: '8rem'  }}>
                                        <Card.Body>
                                            <center>
                                                <Card.Title>Cashapp</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted"><img src={CashappIcon} width="60px"/></Card.Subtitle>
                                            </center>
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
                                    <Card style={{ width: '10rem', height: '8rem'  }}>
                                        <Card.Body>
                                            <center>
                                                <Card.Title>Venmo</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted"><img src={VenmoIcon} width="40px"/></Card.Subtitle>
                                            </center>
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
                                    <Card style={{ width: '10rem', height: '8rem'  }}>
                                        <Card.Body>
                                            <center>
                                                <Card.Title>Revolut</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted"><img src={RevolutIcon} width="40px"/></Card.Subtitle>
                                            </center>
                                        </Card.Body>
                                    </Card>
                                    <input
                                        name="payment-group" 
                                        type="radio" 
                                        value="Revolut" 
                                        checked={paymentMethod === "Revolut"}
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
                    <Button size="lg" style={{width: '450px', height: '100px', fontSize: '45px', fontWeight: 'bold'}} variant="warning" onClick={() => this.setState({modalShow: true})} >
                            Checkout ( ${price} )
                    </Button>

                    <PaymentMethodModal
                        product={product}
                        amount={amountOfProduct}
                        rate={updatedRate}
                        fees={estimatedFee}
                        price={price}
                        paymentMethod={paymentMethod}
                        registeredUserName={registeredUserName}
                        email={email}
                        characterName={characterName}
                        show={modalShow}
                        onHide={() => this.setState({modalShow: false})}
                    />
                </Row>
                <br />
            </Container>
            </>
        )
    }
}

export default Checkout;