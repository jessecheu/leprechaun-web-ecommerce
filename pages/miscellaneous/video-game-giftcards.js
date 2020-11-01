import React from 'react'

import Head from 'next/head';
import { Container, Row, Alert} from 'react-bootstrap';

import GiftcardProductCard from './GiftcardProductCard'

import { attributes } from '../../content/videogamegiftcards.md';

class VGGiftCard extends React.Component{
    state = {
        fetchedGiftcards: [],
        fetchedDiscountValue: ''
    }

    async componentDidMount(){

        const { videogamegiftcards, giftcarddiscount } = attributes;

        console.log("giftcards", videogamegiftcards)
        console.log("giftcarddiscount", giftcarddiscount)

        const fetchedGiftcards = videogamegiftcards
        const fetchedDiscountValue = giftcarddiscount

        this.setState({fetchedGiftcards, fetchedDiscountValue})
    }

    

    render(){

        const {fetchedGiftcards, fetchedDiscountValue} = this.state
        
        return(
        <div className="VGGiftcard">
            <Head>
                <title>RPGStock | Purchase Video game giftcards</title>
                <meta name="description" content="Purchase video game giftcards such as League of legend's Riot Point, PSN, XBox, and Apex Legends" />
            </Head>
            <div style={{textAlign: 'center'}}>
                <h1>Video Game Giftcards</h1>
                <h2>We are currently offering {fetchedDiscountValue}% discount of the giftcard value</h2>
                <br />
            </div>
            <Container fluid>
                <Row className="justify-content-center">
                    {fetchedGiftcards.map(giftcard => (
                        <GiftcardProductCard
                            key={giftcard.name} 
                            name={giftcard.name}
                            image={giftcard.image}
                            denomination={giftcard.denominations}
                            description={giftcard.description}
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


