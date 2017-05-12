import React, { Component } from 'react';
import FormSubmitComponent from './FormSubmit';
import MusicComponent from './MusicComponent';

export default class MoodsComponent extends Component{
  render(){
    return (
      <div>
        <MusicComponent />

        <FormSubmitComponent />

        <div className="pricing-tables pure-g">
            <div className="pure-u-1 pure-u-md-1-3">
                <div className="pricing-table pricing-table-free">
                    <div className="pricing-table-header">
                        <span className="pricing-table-price">
                            GAMING
                        </span>
                    </div>
                    <button className="button-choose pure-button">Choose</button>
                </div>
            </div>

            <div className="pure-u-1 pure-u-md-1-3">
                <div className="pricing-table pricing-table-free">
                    <div className="pricing-table-header">
                        <span className="pricing-table-price">
                            PARTY
                        </span>
                    </div>
                    <button className="button-choose pure-button">Choose</button>
                </div>
            </div>

            <div className="pure-u-1 pure-u-md-1-3">
                <div className="pricing-table pricing-table-free">
                    <div className="pricing-table-header">
                        <span className="pricing-table-price">
                            RELAX
                        </span>
                    </div>
                    <button className="button-choose pure-button">Choose</button>
                </div>
            </div>

            <div className="pure-u-1 pure-u-md-1-3">
                <div className="pricing-table pricing-table-free">
                    <div className="pricing-table-header">
                        <span className="pricing-table-price">
                            PUMP ME UP
                        </span>
                    </div>
                    <button className="button-choose pure-button">Choose</button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
