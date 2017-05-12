import React, { Component } from 'react';

export default class MoodsComponent extends Component{
  render(){
    return (
      <div className="pricing-tables pure-g">
          <div className="pure-u-1 pure-u-md-1-3">
              <div className="pricing-table pricing-table-free">
                  <div className="pricing-table-header">
                      <h2>Personal</h2>

                      <span className="pricing-table-price">
                          $5 <span>per month</span>
                      </span>
                  </div>

                  <ul className="pricing-table-list">
                      <li>Free setup</li>
                      <li>Custom sub-domain</li>
                      <li>Standard customer support</li>
                      <li>1GB file storage</li>
                      <li>1 database</li>
                      <li>Unlimited bandwidth</li>
                  </ul>

                  <button className="button-choose pure-button">Choose</button>
              </div>
          </div>

          <div className="pure-u-1 pure-u-md-1-3">
              <div className="pricing-table pricing-table-biz pricing-table-selected">
                  <div className="pricing-table-header">
                      <h2>Small Business</h2>

                      <span className="pricing-table-price">
                          $25 <span>per month</span>
                      </span>
                  </div>

                  <ul className="pricing-table-list">
                      <li>Free setup</li>
                      <li>Use your own domain</li>
                      <li>Standard customer support</li>
                      <li>10GB file storage</li>
                      <li>5 databases</li>
                      <li>Unlimited bandwidth</li>
                  </ul>

                  <button className="button-choose pure-button">Choose</button>
              </div>
          </div>

          <div className="pure-u-1 pure-u-md-1-3">
              <div className="pricing-table pricing-table-enterprise">
                  <div className="pricing-table-header">
                      <h2>Enterprise</h2>

                      <span className="pricing-table-price">
                          $45 <span>per month</span>
                      </span>
                  </div>

                  <ul className="pricing-table-list">
                      <li>Free setup</li>
                      <li>Use your own domain</li>
                      <li>Premium customer support</li>
                      <li>Unlimited file storage</li>
                      <li>25 databases</li>
                      <li>Unlimited bandwidth</li>
                  </ul>

                  <button className="button-choose pure-button">Choose</button>
              </div>
          </div>
      </div>
    );
  }
}
