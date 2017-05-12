import React, { Component } from 'react';
import FormSubmitComponent from './FormSubmit';
import MusicComponent from './MusicComponent';
import PubSub from 'pubsub-js';

class MoodButton extends Component{
  render(){
    return (
      <div className="pure-u-1 pure-u-md-1-3">
        <div className="pricing-table pricing-table-free">
          <div className="pricing-table-header">
            <span className="pricing-table-price">
              {this.props.name}
            </span>
          </div>
          <button className="button-choose pure-button" onClick={this.props.onClick}>Choose</button>
        </div>
      </div>
    )
  }
}

export default class MoodsComponent extends Component{
  render(){
    return (
      <div>
        <MusicComponent />

        <FormSubmitComponent />

        <div className="pricing-tables pure-g">
          <MoodButton name="GAMING" onClick={this.moodButton}/>
          <MoodButton name="PARTY" onClick={this.moodButton}/>
          <MoodButton name="RELAX" onClick={this.moodButton}/>
          <MoodButton name="PUMP ME UP" onClick={this.moodButton}/>
        </div>
      </div>
    );
  }

  moodButton(){
    PubSub.publish('update-class-list', {newClass: 'toggleComponent'})
  }
}
