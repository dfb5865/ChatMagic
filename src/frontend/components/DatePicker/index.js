import React, {Component} from 'react';
import Button from '../Button';
import ResponseBubble from '../ResponseBubble';
import QuestionBubble from '../QuestionBubble';
import axios from 'axios';

import './DatePicker.scss';

var availableDays = [];

export default class DatePicker extends Component {

  render() {
    return  (
      <div className='date-picker'>
        <div className='bubble-text'>Sure thing! What days of the week work best for you?</div>
        <div className='container'>
          <div>
            <div className='float-left'>
              <Button change={this.handleChange} name='ASAP'/>
            </div>
            <div className='float-right'>
              <Button change={this.handleChange} name='Mon'/>
            </div>
          </div>
          <div>
            <div className='float-left'>
              <Button change={this.handleChange} name='Tue'/>
            </div>
            <div className='float-right'>
              <Button change={this.handleChange}  name='Wed'/>
            </div>
          </div>
          <div>
            <div className='float-left'>
              <Button change={this.handleChange} name='Thurs'/>
            </div>
            <div className='float-right'>
              <Button change={this.handleChange} name='Fri'/>
            </div>
          </div>
          <div>
            <div className='float-left'>
              <Button change={this.handleChange} name='Sat'/>
            </div>
            <div className='float-right'>
              <Button change={this.handleChange} name='Sun'/>
            </div>
          </div>
        </div>
        <div className='separator'></div>
        <div className='bubble-text done-text' onClick={this.handleSubmit.bind(this)}>
          Done
        </div>
      </div>
    );
  }

  handleChange(name, value) {
    var index = availableDays.indexOf(name);
    if (index > -1) {
      availableDays.splice(index, 1);
    } else {
      availableDays.push(name);
    }
  }

  handleSubmit() {
    axios.post('api/dateSelected/', {"days": availableDays})
    .then((response) => {
        if(!response.data.questionResponse){
            console.log("Failed to load question response data");
        }
        else{
            var responseText = response.data.questionResponse;
            var nextQuestionBubbleType = response.data.nextQuestionBubbleType;

            this.props.addPanel(<ResponseBubble addPanel={this.props.addPanel} message={responseText} />);
            this.props.addPanel(<QuestionBubble addPanel={this.props.addPanel} type={nextQuestionBubbleType} />);

        }
    })
    .catch(function (response, err) {
        console.log(err);
    });
  }

}
