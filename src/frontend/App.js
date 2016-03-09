import React, {Component} from 'react';
import DatePicker from './components/DatePicker';
import AskToCall from './components/AskToCall';
// import ChatBubble from './components/ChatBubble';

import 'normalize.css'
import './scss/main.scss';

export default class App extends Component {
        render() {
                return (
                    <div className='App__container'>
                            <DatePicker />
                            <AskToCall />
                            <div className="App__body">
                                    {this.props.children}
                            </div>
                    </div>
                );
        }
}
