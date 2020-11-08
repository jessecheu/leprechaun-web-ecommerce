import React from 'react'
import {Modal, Button, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import util from '../util';

import ReactMarkdown from 'react-markdown'

function AccountModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body scrollable='true'>
        <Card className="text-center" bg={''} text={'dark'} border="warning">
            <Card.Img variant="top" src={props.thumbnail} alt={props.title} height="400px" width="100%"/>
            <Card.Body>
            <Card.Title>
                {`${props.title} ${props.accountlevel}`}{props.categories}
                {props.gamemode} Account 
            </Card.Title>         
            <Card.Text>
            <ReactMarkdown className="description">
                {props.description}
            </ReactMarkdown>
            </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    <b>Account Type: </b>{props.categories}
                    <br />
                    <b>Game: {props.gamemode}</b>
                    <br/>
                    <b>Identifier: {props.identifier}</b>
                    <br />
                    <Button style={{width: '18rem' }}variant="warning">
                        <b>{`PRICE: $ ${util.formatNumber(props.price)}`}</b>
                    </Button>
                </ListGroupItem>
            </ListGroup>
        </Card>
        <Card>
            <Card.Body>
                <ReactMarkdown className="description">
                        Upon purchasing this account, you agree to the following terms and services: 
                </ReactMarkdown>
            </Card.Body>
        </Card>
        <a href="/test-checkout-page">
            <center><Button variant="warning">
                <b>Click here to purchase</b>
            </Button> </center>
        </a> 
        </Modal.Body>
        <Modal.Footer>
          <Button bg={'secondary'} onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default AccountModal;