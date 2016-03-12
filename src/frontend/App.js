import React, {Component} from 'react';
import QuestionBubble from './components/QuestionBubble';

import 'normalize.css'
import './scss/main.scss';

export default class App extends Component {
        state = {
            panels: [<QuestionBubble addPanel={this.addPanel.bind(this)} type="InitialQuestions" scrollToBottom={this.scrollToBottom.bind(this)}/>]
        };

        addPanel(panel) {
            this.setState({panels: [...this.state.panels, panel]});
        }

        scrollToBottom() {
          ReactDOM.findDOMNode(this).scrollTop = ReactDOM.findDOMNode(this).scrollHeight
        }

        render() {
            return (
                <div className='App__container'>
                    {this.state.panels.map((panel) => panel)}
                </div>
            );
        }
}
