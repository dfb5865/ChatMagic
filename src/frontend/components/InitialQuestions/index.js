import React, {Component} from 'react';
import ResponseBubble from '../ResponseBubble';
import QuestionBubble from '../QuestionBubble';
import axios from 'axios';

import './InitialQuestions.scss';

var initialQuestions = [
    {"questionId" : 1, "questionText": "When can I tour it?"},
    {"questionId" : 2, "questionText": "What's the neighborhood like?"},
    {"questionId" : 3, "questionText": "How are the schools?"},
    {"questionId" : 4, "questionText": "What other homes are like this one?"}
];

var initialState = {initialQuestions: initialQuestions};

export default class InitialQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    questionSelected (selectedId) {
        axios.get('/api/initialResponse/' + selectedId)
            .then((response) => {
                if(!response.data.questionResponse){
                    console.log("Failed to load question response data");
                }
                else{
                    var responseText = response.data.questionResponse;
                    var nextQuestionBubbleType = response.data.nextQuestionBubbleType;
                    var sessionId = response.data.sessionId;

                    this.props.addPanel(<ResponseBubble addPanel={this.props.addPanel} message={responseText} scrollToBottom={this.props.scrollToBottom} />);
                    this.props.addPanel(<QuestionBubble sessionId={sessionId} addPanel={this.props.addPanel} type={nextQuestionBubbleType} scrollToBottom={this.props.scrollToBottom}/>);
                }
            })
            .catch(function (response, err) {
                console.log(err);
            });
    }

    render() {
        self = this;
        return  (
          <div className='bubble'>
            <div className='bubble-text'>
                Hi, Beth! What questions do you have about this home?
            </div>
            <div className='bubble-content'>
                {this.state.initialQuestions.map(function(question){
                    return  <div key={question.questionId} className="question-container" onClick={self.questionSelected.bind(self,question.questionId)}>
                                <div className="question-content">{question.questionText}</div>
                            </div>;
                })}
            </div>
          </div>
        );
    }
}
