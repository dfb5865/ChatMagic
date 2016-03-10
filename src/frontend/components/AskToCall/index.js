import React, {Component} from 'react';

import './AskToCall.scss';

export default class AskToCall extends Component {
  render() {
    return  (
      <div className='ask-to-call'>
        <div className='bubble-text'>
          Excellent. We&#39;d love to give you a call to finalize some details.
          <br/>
          <br/>
          Would that be okay?
        </div>
        <div className='separator-ask-to-call'></div>

        <div>
          <div className='float-left-yes' onClick={this.handleYesClick.bind(this)}>
            Yes
          </div>
          <div className='float-right-no' onClick={this.handleNoClick.bind(this)}>
            No
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({'requestToCall' : false});
  }

  handleYesClick (){
    this.setState({'requestToCall' : true});
    // console.log(this.state);
  }

  handleNoClick (){
    this.setState({'requestToCall' : false});
    // console.log(this.state);
  }

}
