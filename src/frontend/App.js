import React, {Component} from 'react';
import DatePicker from './components/smart/datePicker';
import InterestedInTouring from './components/dumb/InterestedInTouring';
import ChatBubble from './components/smart/ChatBubble';

import 'normalize.css'
import './scss/main.scss';

export default class App extends Component {
        render() {
                return (
                    <div className='App__container'>
                            <ChatBubble />
                            <DatePicker />
                            <div className="App__body">
                                    {this.props.children}
                            </div>
                    </div>
                );
        }
}
