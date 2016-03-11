import React, {Component} from 'react';
import ResponseBubble from '../ResponseBubble';
import QuestionBubble from '../QuestionBubble';
import axios from 'axios';

import './AskForNameAndNumber.scss';

var initialState = {name: "Name", number: "Phone"};

export default class AskForNameAndNumber extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleNameChange(event) {
      this.setState({name: event.target.value});
    }

    handleNumberChange(event) {
      this.setState({number: event.target.value});
    }

    clearName(){
      this.setState({name: ''});
    }

    clearNumber(){
      this.setState({number: ''});
    }

    render() {
      return (
        <div className='ask-for-name-and-number'>
          <div className='bubble-text div-with-bottom-border'>
            Great! Tell us your name and phone number and we&#39;ll connect you with the best Premier Agent available to show the home.
          </div>
          <div className='div-with-bottom-border padded-div'>
            <input className='text-input' type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} onClick={this.clearName.bind(this)}/>
          </div>
          <div className='div-with-bottom-border padded-div'>
            <input className='text-input' type="text" value={this.state.number} onChange={this.handleNumberChange.bind(this)} onClick={this.clearNumber.bind(this)}/>
          </div>
          <div className='ok-text' onClick={this.handleOkClick.bind(this)}>OK</div>
        </div>
      );
    }

    handleOkClick() {
      var name = this.state.name;
      var number = this.state.number;

      axios.post('/api/nameAndNumber/', {name: name, number: number, sessionId: this.props.sessionId})
      .then((response) => {
          if(!response.data.questionResponse){
              console.log("Failed to load response data");
          }
          else{
              var responseText = response.data.questionResponse;
              var nextQuestionBubbleType = response.data.nextQuestionBubbleType;

              this.props.addPanel(<ResponseBubble addPanel={this.props.addPanel} message={responseText} />);
              this.props.addPanel(<QuestionBubble sessionId={this.props.sessionId} addPanel={this.props.addPanel} type={nextQuestionBubbleType} />);
          }
      })
      .catch(function (response, err) {
          console.log(err);
      });
    }
}
