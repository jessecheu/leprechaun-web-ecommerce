import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import RPGStockLogo from '../../assets/RPGStock-logo.png';

import {attributes} from '../../content/logocomponent.md'

export const NavBar = () => {
    const { image, alttext} = attributes;
    return (
        <div>
            <ReactBootStrap.Navbar className="my-navbar" bg="light" expand="lg">
            <ReactBootStrap.Navbar.Brand href="/"><img src={image} alt={`${alttext}`} width="80px" height="25px"/></ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                <ReactBootStrap.NavDropdown  title="Runescape" id="basic-nav-dropdown">
                    <p><center>Old School Runescape (07)</center></p>
                        <ReactBootStrap.NavDropdown.Item href="/runescape/buy-oldschool-runescape-gold">Buy Old School Runescape Gold</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="/runescape/sell-oldschool-runescape-gold">Sell Old School Runescape Gold</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="/runescape/swap-osrs-rs3">Swap Old School GP to RS3</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    <p><center>Runescape 3</center></p>
                        <ReactBootStrap.NavDropdown.Item href="/runescape/buy-runescape-3-gold">Buy Runescape 3 Gold</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="/runescape/sell-runescape-3-gold">Sell Runescape 3 Gold</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="/runescape/swap-rs3-osrs">Swap Runescape 3 to OSRS</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    {/* <p><center>Runescape Accounts</center></p>
                        <ReactBootStrap.NavDropdown.Item href="/runescape/rs-account-store">Runescape Accounts</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    <p><center>Old School Runescape Services (07)</center></p>
                        <ReactBootStrap.NavDropdown.Item href="/runescape/osrs-questing-services">Old School Runescape Questing</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="/runescape/osrs-skilling-services">Old School Runescape Skilling</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="/runescape/osrs-minigame-services">Old School Runescape Minigame</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider /> */}
                </ReactBootStrap.NavDropdown>
                <ReactBootStrap.NavDropdown title="Miscellaneous" id="basic-nav-dropdown">
                    <ReactBootStrap.NavDropdown.Item href="/miscellaneous/video-game-giftcards">Video Game Giftcards</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    {/* <ReactBootStrap.NavDropdown.Item href="#action/3.4"><img src={NewIcon} alt="New-Icon" width="22px" height="22px"/> N/A</ReactBootStrap.NavDropdown.Item> */}
                </ReactBootStrap.NavDropdown>   
                </ReactBootStrap.Nav>               
            </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;
