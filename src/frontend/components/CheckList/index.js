import React, {Component} from 'react';
import ResponseBubble from '../ResponseBubble';
import QuestionBubble from '../QuestionBubble';
import axios from 'axios';

import './CheckList.scss';

var initialState = {preapproved: false, workingWithAgent: false, selling: false};

export default class CheckList extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    clickedPreApproved(){
        this.setState({preapproved: !this.state.preapproved});
    }

    clickedAgent(){
        this.setState({workingWithAgent: !this.state.workingWithAgent});
    }

    clickedSelling(){
        this.setState({selling: !this.state.selling});
    }

    handleOkClick() {
      axios.post('/api/checkList/', {preapproved: this.state.preapproved, workingWithAgent: this.state.workingWithAgent, selling: this.state.selling})
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

    render() {
      return (
        <div className='checkList'>
          <div className='bubble-text div-with-bottom-border'>
            One last thing! Please check any of the following that apply to you.
          </div>
          <div className='div-with-bottom-border checkList_padded-div' onClick={this.clickedPreApproved.bind(this)}>
            <div className="checkListItem">Pre-Approved for a loan</div>
            {
                this.state.preapproved ?
                <span className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                </span> 
                : null
            }
          </div>
          <div className='div-with-bottom-border checkList_padded-div' onClick={this.clickedAgent.bind(this)}>
            <div className="checkListItem">Working with an agent</div>
            {
                this.state.workingWithAgent ?
                <span className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                </span> 
                : null
            }
          </div>
          <div className='div-with-bottom-border checkList_padded-div' onClick={this.clickedSelling.bind(this)}>
            <div className="checkListItem">Currently selling a home</div>
            {
                this.state.selling ?
                <span className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                </span> 
                : null
            }
          </div>
          <div className='ok-text' onClick={this.handleOkClick.bind(this)}>OK</div>
        </div>
      );
    }
}
