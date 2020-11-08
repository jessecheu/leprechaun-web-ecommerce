import React from 'react'
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import ScroogeMcDuck from '../../assets/scroogemcduck.png';
import SytheProfile from '../../assets/marketprofiles/sytheprofile.png';



function aboutus() {
    return (
        <div className="aboutus-main">
        <Head>
            <title>RPGStock | About US</title>
            <meta name="description" content="About RPGStock, The place to buy and sell runescape" />
        </Head>
            <div style={{textAlign: 'center'}}>
                <br/>
                <br/>
                <br/>
                <br/>
                    <h1>RPGStock</h1>
                    <h4>Your Place to Buy and Sell Video Game Products</h4>
            </div>
                <br/>
                <br/>
                <br/>
                <br/>
            <hr />
            <div className="middle">
                <h1 className="middle-title" style={{textAlign: 'center'}}><strike>----------------------</strike>Who We Are<strike>----------------------</strike></h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={ScroogeMcDuck} alt="Scrooge MCDuck" height="300px"/>
                        </div>
                        <div className="col-md-8">
                        <p>
                            We have been buying and selling goods for over <bold className="emphasis">3</bold> plus years in games like Runescape, 
                            Old School Runescape, Realm Of The Mad God, CounterStrike Global Offensive, Minecraft, 
                            and other games. 
                            Our hometown is at the west coast of America while our timezone is Pacific.
                            We hope to continue to expand to other games like World of Worldcraft and into Minecraft Servers.
                            Our Mission Statement is 
                            <br  />
                            <div className="emphasis">
                            To enable more people in this new asset class of 
                            Video Game Digital Assets by providing a safe place
                            to buy and sell.
                            </div>
                        </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            
                        </div>
                        <div className="col-md-8">
                        <p>
                            <h1>Why you can trust us?</h1>
                            <br  />
                            <p>
                                We have done over $100,000 in sales and have over 1,400 Feedback cumulative.
                                We use only the best trade practices like trading with Trained Accounts and never
                                buying hacked gold or gold that has been gotten through illicit means. All of our
                                Gold is sourced from legit players. We have tons of experience in trading with only 3 plus years. 
                            </p>
                        </p>
                        </div>
                    </div>
                    <div className="profile">
                        <h1 className="profile-title">External Marketplace Profiles</h1>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src={SytheProfile} alt="Sythe Profile"/>
                                    </div>
                                    <div className="col-md-8">
                                        <p>
                                            <h3><div className="emphasis">Sythe Profile</div>  https://www.sythe.org/members/fyrix.741875  </h3>
                                            <br />
                                            <div className="emphasis">Vouch Page:</div> https://www.sythe.org/threads/fyrixs-vouch-thread/
                                            <br />
                                            <div className="emphasis">Register your  own account here:</div> http://sythe.org/register.php?do=register&r=741875
                                         </p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-4">
                                        
                                    </div>
                                    <div className="col-md-8">
                                        <p>
                                            
                                         </p>
                                    </div>
                                </div>
                            </div>         
                    </div>
                </div>           
            </div>
        </div>

    )
}

export default aboutus;
