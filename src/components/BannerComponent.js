import React, { Component } from 'react';

export default class BannerComponent extends Component{
  render(){
    return (
      <div className="banner">
          <h1 className="banner-head">
              Simple Pricing.<br/>
              Try before you buy.
          </h1>
      </div>
    );
  }
}
