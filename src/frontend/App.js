import React, {Component} from 'react';
import QuestionBubble from './components/QuestionBubble';

import 'normalize.css'
import './scss/main.scss';

export default class App extends Component {
        state = {
            panels: [<QuestionBubble addPanel={this.addPanel.bind(this)} type="InitialQuestions"/>]
        };

        addPanel(panel) {
            this.setState({panels: [...this.state.panels, panel]});
        }

        render() {
            return (
                <div className='App__container'>
                    <div className="App__body">
                        {this.state.panels.map((panel) => panel)}
                    </div>
                </div>
            );
        }
}
