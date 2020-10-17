import React, { Component } from "react";
import RPGStocklogo from "../../assets/RPGStock-logo.png";

import { getToken, clearToken } from "../../utils";

import { siteInfo } from '../../content/siteinformation.md';
import { headerComponent } from '../../content/headercomponent.md';

class Header extends Component {

    render(){
      // const { image } = headerComponent;
      // const { sitetitle } = siteInfo;
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
            <img src={RPGStocklogo} alt={`RPGStock Logo`} width="400px" height="" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
          </a>
        </div>
      );
    }
}

export default (Header);
