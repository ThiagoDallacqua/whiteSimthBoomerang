import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import BannerComponent from './components/BannerComponent';
import MoodsComponent from './components/MoodsComponent';
import AboutComponent from './components/AboutComponent';
import FooterComponent from './components/FooterComponent';
// import YouTube from 'react-youtube';
import './css/pure-min.css';
import './css/pricing.css'
import './css/form.css'

class App extends Component {
  render() {
    return (
        <div>
          <HeaderComponent />

          <BannerComponent />

          <div className="l-content">
              <MoodsComponent />

              <AboutComponent />
          </div>

          <FooterComponent />
        </div>
    );
  }
}

export default App;
