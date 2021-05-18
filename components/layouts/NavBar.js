import React from 'react'
import * as ReactBootStrap from "react-bootstrap";

import {attributes} from '../../content/logocomponent.md'

export const NavBar = () => {
    const { headerimage, alttext} = attributes;
    return (
        <div>
            <ReactBootStrap.Navbar className="my-navbar" bg="light" expand="lg">
            <ReactBootStrap.Navbar.Brand href="/"><img src={headerimage} alt={`${alttext}`} width="45px" height="45px"/></ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">

                </ReactBootStrap.Nav>               
            </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;
