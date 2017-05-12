import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import TratadorErros from './TratadorErros.js';

export default class FormSubmitComponent extends Component{
  constructor(){
    super();
    this.state = {
      msgErro: '',
      music: '',
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
            <input type="text" name="musicField" value={this.state.music} onChange={this.setMusic}/>
          </label>
          <span className="error">{this.state.msgErro}</span>
          <button type="submit" className="pure-button pure-button-primary">Send</button>
        </form>
      </div>
    );
  }

  setMusic(evento){
    this.setState({music: evento.target.value});
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

    fetch('http://localhost:8080/api/autores', {
      headers:{'Content-type': 'application/json'},
      method: 'post',
      body: JSON.stringify({nome:this.state.nome, email:this.state.email, senha:this.state.senha})
    }).then(res => {
      PubSub.publish("limpa-erros", {});

      if (res.status === 400) {
        console.log(res.status);
        console.log(res.statusText);

        res.json()
        .then(err => {
          err.errors.forEach((erro) => console.log(`o campo ${erro.field} não pode estar vazio.`));

          new TratadorErros().publicaErros(err);
        }).catch(err => console.log(err));
      }else{
        res.json()
        .then(novaListagem => {
          console.log(novaListagem);
          PubSub.publish('atualiza-lista-autores', novaListagem);
          this.setState({
            nome: '',
            email: '',
            senha: ''
          });
        }).catch(err => console.log(err));
      }
    });
  }
}
