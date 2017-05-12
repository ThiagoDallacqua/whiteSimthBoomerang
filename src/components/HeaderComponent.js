import React, { Component } from 'react';

export default class HeaderComponent extends Component{
  render(){
    return (
      <div className="pure-menu pure-menu-horizontal">
          <a href="#" className="pure-menu-heading">Your Logo</a>
          <ul className="pure-menu-list">
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
              <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Pricing</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact</a></li>
          </ul>
      </div>
    );
  }
}
