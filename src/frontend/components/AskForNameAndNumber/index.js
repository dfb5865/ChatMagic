import React, {Component} from 'react';
import Label from '../Label';

import './AskForNameAndNumber.scss';

export default class AskForNameAndNumber extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='ask-for-name-and-number'>
        <div className='bubble-text div-with-bottom-border'>
          Great! Tell us your name and phone number and we&#39;ll connect you with the best Premier Agent available to show the home.
        </div>
        <div className='div-with-bottom-border padded-div'>
          <Label name='Name'/>
          <input id='input-box-name' className='input-box-style'/>
        </div>
        <div className='div-with-bottom-border padded-div'>
          <Label name='Phone Number'/>
          <input className='input-box-style'/>
        </div>
        <div className='ok-text' onClick={this.handleOkClick.bind(this)}>OK</div>
      </div>
    );
  }

  handleOkClick() {
    console.log('Hello');
  }
}
