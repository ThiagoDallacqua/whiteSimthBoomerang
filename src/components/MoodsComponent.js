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
      <div className="pure-u-1 pure-u-md-1-3">
        <div className="pricing-table pricing-table-free">
          <div className="pricing-table-header">
            <span className="pricing-table-price">
              {this.props.name}
            </span>
          </div>
          <button className="button-choose pure-button" onClick={this.onClick.bind(this)}>Choose</button>
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
  }
  render(){
    return (
      <div>
        <MusicComponent />

        <FormSubmitComponent setMusic={this.setMusic}/>

        <div className="pricing-tables pure-g">
          <MoodButton name="GAMING" id="1" onClick={this.submitMusic}/>
          <MoodButton name="PARTY" id="2" onClick={this.submitMusic}/>
          <MoodButton name="RELAX" id="3" onClick={this.submitMusic}/>
          <MoodButton name="PUMP ME UP" id="4" onClick={this.submitMusic}/>
        </div>
      </div>
    );
  }

  submitMusic(mood_id){
    API.submitMusic(this.state.link, mood_id).then(function(response){
      PubSub.publish('update-vide-player', response);
    })
  }
}
