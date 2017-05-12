import React, { Component } from 'react';

export default class FormSubmitComponent extends Component{
  constructor(){
    super();
    this.state = {
      musicUrl: '',
    };
    this.setMusic = this.setMusic.bind(this);
  }

  render(){
    return (
      <input type="text" className="text-center" placeholder="Paste a youtube link" id="addlink" value={this.state.musicUrl} onChange={this.setMusic}/>
    );
  }

  setMusic(evento){
    this.props.setMusic(evento.target.value)
    this.setState({musicUrl: evento.target.value});
  }
}
