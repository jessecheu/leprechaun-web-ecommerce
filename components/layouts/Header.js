import React, { Component } from "react";
import RPGStocklogo from "../../assets/RPGStock-logo.png";

import { getToken, clearToken } from "../../utils";

import { attributes } from '../../content/logocomponent.md';

class Header extends Component {

    render(){
      const { headerimage, alttext } = attributes;
      return(
        <div className="my-header">
          <div className="top-bar">
            <div className="buttons">
              <p className="ProfileSeperation">
                {/* Welcome */}
                {/* <a href="/profile">View Profile</a>
                <a href="/">
                  Logout
                </a> */}
              </p>
            </div>
          </div>
          <a href="/">
            <img src={headerimage} alt={alttext} width="400px" height="" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
          </a>
        </div>
      );
    }
}

export default (Header);
