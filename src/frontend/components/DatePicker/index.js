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
    var joinedDays = availableDays.join(" and ");
    axios.get('api/dateSelected/' + joinedDays)
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
