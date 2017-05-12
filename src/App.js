import React, { Component } from 'react';
import BannerComponent from './components/BannerComponent';
import MoodsComponent from './components/MoodsComponent';

import './fonts/glyphicons-halflings-regular.eot';
import './css/pure-min.css';
import './css/pricing.css'
import './css/form.css'
import './css/bootstrap.min.css'
import './css/style.css'


class App extends Component {

  render() {
    return (
        <div>
          <BannerComponent />
          <MoodsComponent />
          <div className="l-content">
          </div>
        </div>
    );
  }
}

export default App;
