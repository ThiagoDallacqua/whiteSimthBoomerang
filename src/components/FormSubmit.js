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
        </form>
      </div>
    );
  }

  setMusic(evento){
    this.props.setMusic(evento.target.value)
    this.setState({musicUrl: evento.target.value});
  }
}
