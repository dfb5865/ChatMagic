import React, {Component} from 'react';
import ResponseBubble from '../ResponseBubble';
import QuestionBubble from '../QuestionBubble';
import axios from 'axios';

import './SimilarHome.scss';

export default class SimilarHome extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
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

      axios.post('/api/nameAndNumber/', {name: name, number: number})
      .then((response) => {
          if(!response.data.questionResponse){
              console.log("Failed to load response data");
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
