import React from 'react'
// import './HowToBegin.css';
import GettingStartedPicture from './HowToBeginPictures/getting-started-picture.png';
import OrangeArrow from './HowToBeginPictures/orangearrow.png';
import OrangeNotepad from './HowToBeginPictures/orangenotepad.png';
import AgreementPicture from './HowToBeginPictures/agreement.png';

export const HowToBegin = () => {
    return (
        <div>
         {/*  How to Begin Component */}
         <div className="sub-body">
         <hr/> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="title">HOW TO BEGIN?</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <img src={GettingStartedPicture} alt="Getting Started" width="200px"/>
                                <h6>
                                    Get started by talking to an agent using the live chat window
                                    at the bottom right of your screen!                         
                                </h6>
                            </div>
                            <div className="col-md-1">
                                <img className="arrowimage" alt="" src={OrangeArrow} width="100px"/>
                            </div>
                            <div className="col-md-3">
                                <img src={OrangeNotepad} alt="" width="100px"/>
                                <h6>
                                    Simply State what you want to buy or sell
                                    and which payment method you are looking for.
                                </h6>
                            </div>
                            <div className="col-md-1">
                                <img className="arrowimage" alt="" src={OrangeArrow} width="100px"/>
                            </div>
                            <div className="col-md-3">
                                <img src={AgreementPicture} alt="Agreement" width="100px"/>
                                <h6>
                                    We both agree to the terms of the trade and then proceed
                                    with the trade.
                                </h6>
                            </div>
                            <div className="col-md-1">
                                <img className="arrowimage" alt="" src={OrangeArrow} width="100px"/>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                        <div className="col-md-4">
                                <img src={AgreementPicture} alt="Agreement" width="100px"/>
                                <h6>
                                    We complete the trade by trading the goods or service on 
                                    the terms that we agreed to.
                                </h6>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowToBegin;
