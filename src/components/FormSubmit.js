import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import API from '../api';
export default class FormSubmitComponent extends Component{
  constructor(){
    super();
    this.state = {
      msgErro: '',
      musicUrl: '',
      formClasses: ['musicForm']
    };

    this.enviaForm = this.enviaForm.bind(this);
    this.setMusic = this.setMusic.bind(this);
  }

  render(){
    return (
      <div className={this.state.formClasses}>
        <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="post">
          <label>
            Send Music
            <input type="text" name="musicField" value={this.state.musicUrl} onChange={this.setMusic}/>
          </label>
          <span className="error">{this.state.msgErro}</span>
          <button type="submit" className="pure-button pure-button-primary">Send</button>
        </form>
      </div>
    );
  }

  setMusic(evento){
    this.setState({musicUrl: evento.target.value});
  }

  enviaForm(evento){
    evento.preventDefault();
    API.submitMusic(this.state.musicUrl, 3).then(function(response){
      PubSub.publish('update-vide-player', response);
    })
  }
}
