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

  handleYesClick (){
        axios.get('/api/okayToCall/true')
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

  handleNoClick (){
        axios.get('/api/okayToCall/false')
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
