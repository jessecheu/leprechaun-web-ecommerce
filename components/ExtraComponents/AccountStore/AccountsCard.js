import React from 'react'
import util from '.../../../components/ExtraComponents/util';


import { Button } from 'react-bootstrap';
import AccountModal from './AccountModal'

import ReactMarkdown from 'react-markdown'
import Timestamp from 'react-timestamp'

import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';


const AccountsCard =  ({id, identifier, title, gamemode, price, thumbnail, description, categories, accountlevel, postAt}) => {

    const [modalShow, setModalShow] = React.useState(false);

    return(
        <>
        <Card style={{ width: '22rem', textAlign: 'center'}} bg={''} text={'dark'} border="warning">
            <Card.Img variant="top" src={(thumbnail)} alt={title} height="400px" width="100%"/>
            <Card.Body>
            <Card.Title>
                {`${title} ${accountlevel}`}{categories}
                {gamemode} Account 
            </Card.Title>         
            <Card.Text>
                <ReactMarkdown className="description">
                    {description}
                </ReactMarkdown>
            </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    <b>Account Type: </b>{categories}
                    <br />
                    <b>Game: </b>{gamemode}
                    <br/>
                    <b>Identifier: </b>{identifier}
                </ListGroupItem>
            </ListGroup>
            <Card.Footer>
                    <Button variant="warning" className="price-height" onClick={() => setModalShow(true)}>
                        <b>{`PRICE: $ ${util.formatNumber(price)}`}</b>
                    </Button>
                    <AccountModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        title={title}
                        description={description}
                        thumbnail={(thumbnail)}
                        identifier={identifier}
                        price={price}
                        categories={categories}
                        accountlevel={accountlevel}
                        gamemode={gamemode}
                    />
            </Card.Footer>
            <small className="text-muted">Posted on <Timestamp date={postAt} /></small>
        </Card>  
        </>
    )
}

export default AccountsCard;
