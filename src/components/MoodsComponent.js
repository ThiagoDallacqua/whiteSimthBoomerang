import React, { Component } from 'react';
import FormSubmitComponent from './FormSubmit';
import MusicComponent from './MusicComponent';
import PubSub from 'pubsub-js';
import API from '../api'

class MoodButton extends Component{
  onClick(evento){
    evento.preventDefault();
    this.props.onClick(this.props.id)
  }
  render(){
    return (
      <div className="col-md-4 text-center thumb" onClick={this.onClick.bind(this)}>
        <h2>{this.props.name}</h2>
        <div className="thumbnail" href="#">
          <img className="img-responsive" src="http://placehold.it/400x300" alt="" />
        </div>
      </div>
    )
  }
}

export default class MoodsComponent extends Component{
  constructor(){
    super();
    this.state = {
      link: ''
    };

    this.submitMusic = this.submitMusic.bind(this);
    this.setMusic = this.setMusic.bind(this);
  }
  setMusic(link){
    this.setState({link: link})
    PubSub.publish('update-vide-player', link);
  }
  render(){
    return (
      <div>
        <div className="container">
          <MusicComponent />
          <FormSubmitComponent setMusic={this.setMusic}/>

          <div className="row no-gutter">
            <MoodButton name="RANDOM" id="11" onClick={this.submitMusic}/>
            <MoodButton name="TROLL" id="12" onClick={this.submitMusic}/>
            <MoodButton name="PARTY" id="13" onClick={this.submitMusic}/>
            <MoodButton name="RELAX" id="14" onClick={this.submitMusic}/>
            <MoodButton name="GLOOMY" id="15" onClick={this.submitMusic}/>
            <MoodButton name="FUNKY" id="16" onClick={this.submitMusic}/>
          </div>
        </div>
      </div>
    );
  }

  submitMusic(mood_id){
    API.submitMusic(this.state.link, mood_id).then(function(response){
      let link = response.link
      PubSub.publish('update-vide-player', link);
    })
  }
}
