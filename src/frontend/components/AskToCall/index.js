import React, {Component} from 'react';
import ResponseBubble from '../ResponseBubble';
import QuestionBubble from '../QuestionBubble';
import axios from 'axios';

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
          <div className='float-left-yes' onClick={this.handleClick.bind(this,true)}>
            Yes
          </div>
          <div className='float-right-no' onClick={this.handleClick.bind(this,false)}>
            No
          </div>
        </div>
      </div>
    );
  }

  handleClick (trueValue){
        axios.post('/api/okayToCall/', {trueValue: trueValue, sessionId: this.props.sessionId})
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
