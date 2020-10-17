import React from 'react'
const SearchyName = require('../../assets/userreviews/searchy-name.png');
const SearchyDonorRank = require('../../assets/userreviews/searchy-donorrank.png');
const QBDName = require('../../assets/userreviews/qbd-name.png');
const QBDDonorRank = require('../../assets/userreviews/qbd-donorrank.png');
const AssassinName = require('../../assets/userreviews/assassin-name.png');
const AssassinDonorRank = require('../../assets/userreviews/assassin-donorrank.png');

import { Card } from 'react-bootstrap'

import { attributes } from '../../content/showcasecomponent.md'

export default function Showcase() {
    const { title } = attributes;
    return (
        <div className="container text-center p-1 my-reviewsection">
            <h4>{title}</h4>
            <div className="row">
                    <div className="col-md-4 my-column">
                        <p>             
                            <a target="_blank" rel="noopener noreferrer" href="https://www.sythe.org/threads/fyrixs-vouch-thread/#post-30492611">
                                <img src={SearchyName} alt="SearchyReview" /><img src={SearchyDonorRank} alt="SearchyDonorRank" />
                            </a>
                            <Card>
                                <Card.Body>"Huge vouch for this man, bought 6b+ 07 off him over the course of a few months. 
                                    Always friendly and easy to deal with,
                                        much appreciated!" (May 6, 2018)</Card.Body>
                            </Card>               
                        </p>
                    </div>
                    <div className="col-md-4 my-column">
                    <p>             
                        <a target="_blank" rel="noopener noreferrer" href="https://www.sythe.org/threads/fyrixs-vouch-thread/#post-30769035">
                            <img src={QBDName} alt="QBDReview" /><img src={QBDDonorRank} alt="QBDDonorRank" />
                        </a>                              
                        <Card>
                            <Card.Body>"sold me a WHOPPING 1.3b osrs, excellent trading practices, 
                                tyvm for choosing me :D" (May 23, 2018)</Card.Body>
                        </Card>
                        </p>
                    </div>
                    <div className="col-md-4 my-column">
                    <p>             
                        <a target="_blank" rel="noopener noreferrer" href="https://www.sythe.org/threads/fyrixs-vouch-thread/page-69#post-43689319">
                            <img src={AssassinName} alt="AssassinReview" /><img src={AssassinDonorRank} alt="AssassinDonorRank" />
                        </a>                              
                        <Card>
                            <Card.Body>"Sold him another 500m 07 quick and easy thanks man!" (May 19, 2020)</Card.Body>
                        </Card>
                        </p>
                    </div>
            </div>
        </div>
    )
}
