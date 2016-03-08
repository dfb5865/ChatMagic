import React, {Component} from 'react';
import Hello from './components/dumb/Hello';

import 'normalize.css'
import './scss/main.scss';

export default class App extends Component {
        render() {
                return (
                    <div className='App__container'>
                            <Hello />
                            <div className="App__body">
                                    {this.props.children}
                            </div>
                    </div>
                );
        }
}