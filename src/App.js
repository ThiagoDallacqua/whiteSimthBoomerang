import React, { Component } from 'react';
import YouTube from 'react-youtube';
// import {Link,   Route,  BrowserRouter as Router, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './css/pure-min.css';
import './css/pricing.css'

class App extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playersVars: {
        autoplay: 1
      }
    };
    return (
      // <Router>
      //
      // </Router>
      <div>
        <YouTube
          videoId="9jK-NcRmVcw"
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }

  _onReady(event){
    event.target.pauseVideo();
  }
}

export default App;
