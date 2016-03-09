import React, {Component} from 'react';
import QuestionBubble from './components/QuestionBubble';

import 'normalize.css'
import './scss/main.scss';

export default class App extends Component {
        render() {
            return (
                <div className='App__container'>
                    <div className="App__body">
                        <QuestionBubble type="InitialQuestions"/>
                    </div>
                </div>
            );
        }
}
