import React, {Component} from 'react';
import ReactDom from 'react-dom';
import InitialQuestions from '../InitialQuestions';
import AskForNameAndNumber from '../AskForNameAndNumber';
import AskToCall from '../AskToCall';
import CheckList from '../CheckList';
import SimilarHome from '../SimilarHome';
import DatePicker from '../DatePicker';
import ThreeBounceAnimation from '../ThreeBounceAnimation';

import './QuestionBubble.scss';

export default class QuestionBubble extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
  }

  componentDidMount() {
    
    setTimeout(function(){ this.setState({loading: false }); ReactDom.findDOMNode(this).scrollIntoView(); }.bind(this), 1000);
  }

  render() {
    return(
        
          <div className="bubble-container">
            <div className="icon">Z</div>
            <div className="bubble-q">
              {this.state.loading 
                ?
              <div className='sk-three-bounce'>
                <div className="sk-child sk-bounce1"></div>
                <div className="sk-child sk-bounce2"></div>
                <div className="sk-child sk-bounce3"></div>
              </div> :
              (() => {
                switch (this.props.type) {
                  case "InitialQuestions":   return <InitialQuestions sessionId={this.props.sessionId} addPanel={this.props.addPanel} />;
                  case "AskForNameAndNumber": return <AskForNameAndNumber sessionId={this.props.sessionId} addPanel={this.props.addPanel} />;
                  case "AskForNameAndEmail": return <AskForNameAndEmail sessionId={this.props.sessionId} addPanel={this.props.addPanel} />;
                  case "AskToCall": return <AskToCall sessionId={this.props.sessionId} addPanel={this.props.addPanel} />;
                  case "CheckList": return <CheckList sessionId={this.props.sessionId} addPanel={this.props.addPanel} />;
                  case "SimilarHome": return <SimilarHome sessionId={this.props.sessionId} addPanel={this.props.addPanel} />;
                  case "DatePicker": return <DatePicker sessionId={this.props.sessionId} addPanel={this.props.addPanel} />;
                  default:      return <InitialQuestions sessionId={this.props.sessionId} addPanel={this.props.addPanel} />;
                }
              })()}
            </div>
          </div>
      
      )
  }
}
