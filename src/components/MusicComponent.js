import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import YouTube from 'react-youtube';

export default class MusicComponent extends Component{
  constructor(){
    super();
    this.state = {
      videoId: ''
    };
  }

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
          videoId={this.state.videoId}
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }

  componentDidMount(){
    PubSub.subscribe('update-vide-player', (topico, newMusic) => {
      let separator = '=';
      let videoId = newMusic.link.slice((newMusic.link.indexOf(separator) + 1), newMusic.link.length);

      this.setState({videoId: videoId});
    });
  }
}
