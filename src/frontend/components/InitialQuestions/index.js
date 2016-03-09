import React, {Component} from 'react';
import axios from 'axios';

import './InitialQuestions.scss';

var initialQuestions = [
    {"questionId" : 1, "questionText": "When can I tour it?"},
    {"questionId" : 2, "questionText": "What's the neighborhood like?"},
    {"questionId" : 3, "questionText": "How are the schools?"},
    {"questionId" : 4, "questionText": "What other homes are like this one?"}
];

var initialState = {
                    initialQuestions: initialQuestions,
                    zpid: 1234567,
                    selectedQuestion: null,
                    property: {}
                    };

export default class InitialQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount () {
        var self = this;
        axios.get('/api/property/' + this.state.zpid)
            .then(function (response) {
                if(!response.data.property){
                    console.log("Failed to load property data");
                }
                else{
                    self.setState((state) => ({ property: response.data.property }));
                }
            })
            .catch(function (response, err) {
                console.log("Bad Response from server when loading property data");
            });
    }

    questionSelected (selectedId) {
        self.setState((state) => ({ selectedQuestion: selectedId }));
        axios.get('/api/initialResponse/' + selectedId)
            .then(function (response) {
                if(!response.data.questionResponse){
                    console.log("Failed to load question response data");
                }
                else{
                    var responseText = response.data.questionResponse;
                    var nextChatBubbleType = ""
                    
                }
            })
            .catch(function (response, err) {
                console.log("Bad Response from server when loading question response data");
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