import React, { Component } from "react";

import { attributes } from '../../content/logocomponent.md';

class Header extends Component {

    render(){
      const { headerimage, alttext } = attributes;
      return(
        <div>
          <a href="/">
            <img src={headerimage} alt={alttext} width="" height="120px" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
          </a>
        </div>
      );
    }
}

export default (Header);
