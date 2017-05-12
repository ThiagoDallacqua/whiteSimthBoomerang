import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default class MusicComponent extends Component{
  render(){
    const opts = {
      height: '390',
      width: '640',
      playersVars: {
        autoplay: 1
      }
    };

    return (
      <div className="musicMood">
        <YouTube
          videoId="9jK-NcRmVcw"
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}
