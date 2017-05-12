import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import YouTube from 'react-youtube';

export default class MusicComponent extends Component{
  constructor(){
    super();
    this.state = {
      videoId: '',
      errorMesage: ''
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
          onError={this._onError}
        />

        <span>{this.state.errorMesage}</span>
      </div>
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }

  _onError(event) {
    this.setState({errorMessage: 'Invalid video URL.'},
  () => console.log(this.state.errorMesage));
  }

  componentDidMount(){
    PubSub.subscribe('update-vide-player', (topico, newMusic) => {
      let separator = '=';
      let videoId = newMusic.slice((newMusic.indexOf(separator) + 1), newMusic.length);

      this.setState({videoId: videoId});
    });

    PubSub.subscribe('check-video-url', (topico, newUrl) => {
      let separator = '=';
      let videoId = newUrl.slice((newUrl.indexOf(separator) + 1), newUrl.length);

      this.setState({videoId: videoId});
    });
  }
}
