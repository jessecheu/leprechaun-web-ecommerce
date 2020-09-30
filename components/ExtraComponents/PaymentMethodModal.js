import React from 'react'
import {Modal, Button} from 'react-bootstrap'

function PaymentMethodModal(props) {
    console.log("PaymentMethodCard Props", props)
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Purchasing {props.product}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            You are purchasing <b>{props.amount}M</b> {props.product}
            at {props.rate}/M, you will be paying <b>${props.price}</b>
            <hr />

            Please <b>contact a live chat agent</b> using the bottom right live chat widget or
              on add me on <b>discord: rpgstock#0777 UID: 574588629343797257  (Please beware of imposters)</b>
              and copy and paste the information below. 
            <br />
            <br />
            <p>Character Name: <b>{props.characterName}</b>
            <br />
            Email: <b>{props.email}</b>
            <br />
            Buying: <b>{props.product}</b>
            <br />
            Payment Method: <b>{props.paymentMethod}</b>
            <br />
            Amount: <b>{props.amount}</b>
            <br />
            Rate: <b>{props.rate}/M</b>
            <br />
            Price: <b>${props.price}</b>
            </p>
            <center>*These rates and amount are an estimate, indiciation, and is not final unless authorized by staff*</center>
            <br />
            <br />
            <ul>
              <li>Rates can be lowered if you have some kind of reputation on websites like sythe, osbot, epicnpc, or any other marketplaces.</li>
            </ul>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button bg={'warning'} onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default PaymentMethodModal;
