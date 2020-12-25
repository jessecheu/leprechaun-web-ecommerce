import React, { useContext, useState, useEffect } from 'react'
import {Container, Row, Col, Card, Button, Form, InputGroup} from 'react-bootstrap'
import util from "../../utils/util"
import validator from 'validator'

import Router, {useRouter, withRouter} from 'next/router'

import { UserContext } from '../../utils/UserContext'


const initialState = {
    rate: "",
    title: "",
    rsgpAmount: "",
    setRsgpAmount: "",
    usdAmount: "",
    setUsdAmount: "",
    amountError: "",
    characterName: "",
    characterNameError: "",
    email: "",
    emailError: ""
}


class RSGPBox extends React.Component {
    constructor(props){
        super(props);
        this.state= initialState;

    }

    static contextType = UserContext


    onInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: (event.target.value)
        })
    }
    

    onChangeAmounts(e, currency){
        const {rsgpAmount, usdAmount, rate} = this.state;

        if(currency === 'A'){
            const newValueA = e.target.value;
            this.setState({
                rsgpAmount: newValueA,
                usdAmount: newValueA * rate
            })
        }else if(currency === 'B'){
            const newValueB = e.target.value;
            this.setState({
                rsgpAmount: newValueB / rate,
                usdAmount: newValueB
            })
        }
    }

    validate = () => {
        let amountError = "";
        let characterNameError= "";
        let emailError= "";

        const {characterName, email, rsgpAmount, usdAmount} = this.state

        if(!rsgpAmount || !usdAmount){
            amountError = "*Please input how much you want to purchase*"
        }else if(usdAmount >= 1500){
            amountError = "*You are attempting to purchase $1500 or more, please contact an live chat agent to proceed.*"
        }
        if(
            !characterName || 
            characterName.length < 0 || 
            characterName.length > 12
            // !validator.isAlphanumeric(characterName, 'en-US')
            ){
            characterNameError="*Invalid Character Name, Please input your Character Name*"
        }
        if(!validator.isEmail(email)) {
            emailError="*Invalid Email, Please enter your correct email*";
        }
        if(amountError ||  characterNameError || emailError){
            this.setState({amountError, characterNameError, emailError })
            return false;
        }

        return true;
    }

    
    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        const isValid = this.validate();
        const { user, setUser } = this.context
        if (isValid) {
            console.log("handleSubmit is working!")
            console.log("RSGPBox.handleSubmit data", data)
            setUser({
                rate: data.rate, 
                amount: data.rsgpAmount,
                characterName: data.characterName, 
                email: data.email, 
                title: data.title
            })
            Router.push({
                pathname: '/checkout-summary'
            })          
        }    
    }


    componentDidMount(){
        this.setState({
            title: this.props.title,
            rate: this.props.rate,
            rsgpAmount: '',
            usdAmount: this.props.rate * 0,

        })
    }


    render(){
        const {rate, title, rsgpAmount, usdAmount, amountError,  characterNameError, emailError} = this.state

        return(
            <div>
                <Card style={{textAlign: 'center'}}>
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <h2 style={{color: "orange"}}>Rate: ${rate} /M</h2>
                        </Card.Text>
                        <br />
                        <Form onSubmit={this.handleSubmit}>
                            <Container>
                                <Row className="justify-content-center">
                                        <Col md={5}>
                                            <InputGroup>
                                                <Form.Control 
                                                    type="number" 
                                                    placeholder="RSGP" 
                                                    value={rsgpAmount} 
                                                    onChange={(e) => {this.onChangeAmounts(e, 'A');
                                                }}/>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text>M</InputGroup.Text>
                                                </InputGroup.Prepend>
                                            </InputGroup>
                                            RSGP (M) Amount
                                        </Col>
                                        <Col md={2}> 
                                            <div style={{color: "orange", fontSize: "4rem", fontWeight: "bold"}}>=</div> 
                                        </Col>
                                        <Col md={5}>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text>$</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control 
                                                    type="number" 
                                                    placeholder="USD" 
                                                    value={usdAmount} 
                                                    onChange={(e) => {this.onChangeAmounts(e, 'B');
                                                }}/>
                                            </InputGroup>
                                            USD ($) Amount
                                        </Col>
                                        <div style={{color: 'orange', fontWeight: 'bold'}}>{amountError}</div>
                                </Row>
                            </Container>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Enter your character name" name="characterName" onChange={this.onInputChange} />
                                <div style={{color: 'orange', fontWeight: 'bold'}}>{characterNameError}</div>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Your Email" name="email" onChange={this.onInputChange} />
                                <div style={{color: 'orange', fontWeight: 'bold'}}>{emailError}</div>
                            </Form.Group>
                            <Form.Text className="text-muted">
                                We'll never share your Character Name or Email with anyone else.
                            </Form.Text>
                                <Button variant="warning" type="submit"><b>Purchase Now (${util.formatNumber(usdAmount)})</b></Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default withRouter(RSGPBox);