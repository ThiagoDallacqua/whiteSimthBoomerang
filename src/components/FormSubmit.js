import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import TratadorErros from './TratadorErros.js';

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

  componentDidMount(){
    PubSub.subscribe("erro-validacao", (topico, erro) => {
      if (erro.field === this.props.name){
        this.setState({msgErro: erro.defaultMessage});
      }
    });

    PubSub.subscribe("limpa-erros", (topico, objVazio) => {
      this.setState({msgErro: ''});
    });

    PubSub.subscribe('update-class-list', (topico, obj) => {

    });
  }

  enviaForm(evento){
    evento.preventDefault();

    fetch('https://boomrang-server.herokuapp.com/musics/', {
      headers:{'Content-type': 'application/json'},
      method: 'post',
      mode: 'cors',
      body: JSON.stringify({link: this.state.musicUrl, mood_id: 6})
    }).then(res => {
      PubSub.publish("limpa-erros", {});

      if (res.status === 400) {
        console.log(res.status);
        console.log(res.statusText);

        res.json()
        .then(err => {
          err.errors.forEach((erro) => console.log(`o mood não existe.`));

          new TratadorErros().publicaErros(err);
        }).catch(err => console.log(err));
      }else{
        res.json()
        .then(result => {
          console.log(result);
        }).catch(err => console.log(err));
      }
    });
  }
}
