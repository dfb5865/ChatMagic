import React, {Component} from 'react';
import InitialQuestions from '../InitialQuestions';
import AskForNameAndNumber from '../AskForNameAndNumber';
import AskToCall from '../AskToCall';
import CheckList from '../CheckList';
import SimilarHome from '../SimilarHome';

import './QuestionBubble.scss';

export default class QuestionBubble extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return(
          <div className="bubble-container">
            <div className="icon">Z</div>
            <div className="bubble-q">
              {(() => {
                switch (this.props.type) {
                  case "InitialQuestions":   return <InitialQuestions />;
                  case "AskForNameAndNumber": return <AskForNameAndNumber />;
                  case "AskToCall": return <AskToCall />;
                  case "CheckList": return <CheckList />;
                  case "SimilarHome": return <SimilarHome />;
                  default:      return <InitialQuestions />;
                }
              })()}
            </div>
          </div>
      )
  }
}
