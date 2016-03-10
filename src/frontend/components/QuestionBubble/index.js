import React, {Component} from 'react';
import ReactDom from 'react-dom';
import InitialQuestions from '../InitialQuestions';
import AskForNameAndNumber from '../AskForNameAndNumber';
import AskToCall from '../AskToCall';
import CheckList from '../CheckList';
import SimilarHome from '../SimilarHome';
import DatePicker from '../DatePicker';

import './QuestionBubble.scss';

export default class QuestionBubble extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    ReactDom.findDOMNode(this).scrollIntoView();
  }

  render() {
    return(
          <div className="bubble-container">
            <div className="icon">Z</div>
            <div className="bubble-q">
              {(() => {
                switch (this.props.type) {
                  case "InitialQuestions":   return <InitialQuestions addPanel={this.props.addPanel} />;
                  case "AskForNameAndNumber": return <AskForNameAndNumber addPanel={this.props.addPanel} />;
                  case "AskForNameAndEmail": return <AskForNameAndEmail addPanel={this.props.addPanel} />;
                  case "AskToCall": return <AskToCall addPanel={this.props.addPanel} />;
                  case "CheckList": return <CheckList addPanel={this.props.addPanel} />;
                  case "SimilarHome": return <SimilarHome addPanel={this.props.addPanel} />;
                  case "DatePicker": return <DatePicker addPanel={this.props.addPanel} />;
                  default:      return <InitialQuestions addPanel={this.props.addPanel} />;
                }
              })()}
            </div>
          </div>
      )
  }
}
