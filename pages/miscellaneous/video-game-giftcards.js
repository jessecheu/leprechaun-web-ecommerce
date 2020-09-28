import React from 'react'
import axios from 'axios';

import { Helmet} from 'react-helmet';
import { Container, Row, Alert} from 'react-bootstrap';

import GiftcardProductCard from './GiftcardProductCard'

import { apiURL } from '../../utils/apiURL'

import {attributes, react as Content} from '../../content/videogamegiftcards.md'

class VGGiftCard extends React.Component{
    state = {
        fetchedGiftcards: [],
        fetchedDiscountValue: ''
    }

    async componentDidMount(){

        const { giftcarddiscount, giftcards } = attributes;

        console.log(giftcards)

        const fetchedGiftcards = giftcards
        const fetchedDiscountValue = giftcarddiscount

        this.setState({fetchedGiftcards, fetchedDiscountValue})
    }

    

    render(){

        const {fetchedGiftcards, fetchedDiscountValue} = this.state

        return(
        <div className="VGGiftcard">
            <Helmet>
                <title>RPGStock | Purchase Video game giftcards</title>
                <meta name="description" content="Purchase video game giftcards such as League of legend's Riot Point, PSN, XBox, and Apex Legends" />
            </Helmet>
            <div style={{textAlign: 'center'}}>
                <h1>Video game Giftcards</h1>
                <h2>We are currently offering {fetchedDiscountValue}% of the giftcard value</h2>
                <br />
            </div>
            <Container fluid>
                <Row className="justify-content-center">
                    {fetchedGiftcards.map(giftcard => (
                        <GiftcardProductCard 
                            name={giftcard.name}
                            // description={giftcard.description}
                            // thumbnail={giftcard.thumbnail && giftcard.thumbnail.url}
                            denomination={giftcard.denominations}
                        />
                    ))}
                </Row>
            </Container>
            {fetchedGiftcards >= 0 &&
                <Alert variant={'warning'}>
                    <p>No Data Found, Please <a href="/contact">Contact Support</a> if you see this</p>
                </Alert>
            }
            
        </div>
        )
    }
}

export default VGGiftCard;


