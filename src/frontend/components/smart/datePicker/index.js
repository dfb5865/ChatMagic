import React, {Component} from 'react';
import Button from '../Button';

import './DatePicker.scss';

var availableDays = [];

export default class DatePicker extends Component {

  render() {
    return  (
      <div className='DatePicker'>
        <div className='UncenteredContent'>Sure thing! What days of the week work best for you?</div>
        <div>
          <Button change={this.handleChange} name='ASAP'/>
          <Button change={this.handleChange} name='Mon'/>
        </div>
        <div>
          <Button change={this.handleChange} name='Tue'/>
          <Button change={this.handleChange}  name='Wed'/>
        </div>
        <div>
          <Button change={this.handleChange} name='Thurs'/>
          <Button change={this.handleChange} name='Fri'/>
        </div>
        <div>
          <Button change={this.handleChange} name='Sat'/>
          <Button change={this.handleChange} name='Sun'/>
        </div>
        <hr />
        <div className='CenteredContent'>
          <a onClick={this.handleSubmit.bind(this)}>Done</a>
        </div>
      </div>
    );
  }

  handleChange(name, value) {
    if (availableDays.indexOf(name) > -1) {
      availableDays.splice(name, 1);
    } else {
      availableDays.push(name);
    }
    // this.setState({'availableDays': availableDays});
  }

  handleSubmit() {
    console.log(availableDays);
  }

}
