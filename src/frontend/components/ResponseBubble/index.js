import React, {Component} from 'react';
import ReactDom from 'react-dom';

import './ResponseBubble.scss';

export default class ResponseBubble extends Component {
    componentDidMount(){
        ReactDom.findDOMNode(this).scrollIntoView();
    }

  render() { return(<div className="bubble-width"><div className="bubble-r">{this.props.message}</div></div>) }
}
