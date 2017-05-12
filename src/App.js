import React, { Component } from 'react';
import BannerComponent from './components/BannerComponent';
import MoodsComponent from './components/MoodsComponent';

import './css/pure-min.css';
import './css/pricing.css'
import './css/form.css'

class App extends Component {

  render() {
    return (
        <div>
          <BannerComponent />
          <div className="l-content">
            <MoodsComponent />
          </div>
        </div>
    );
  }
}

export default App;
