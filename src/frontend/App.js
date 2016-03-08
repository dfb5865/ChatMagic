import React, {Component} from 'react';
import Hello from './components/dumb/Hello';


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