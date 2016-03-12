import React, {Component} from 'react';
import ReactDom from 'react-dom';

import './ResponseBubble.scss';

export default class ResponseBubble extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        ReactDom.findDOMNode(this).scrollIntoView();
        this.props.scrollToBottom();
    }

  render() { return(<div className="bubble-width"><div className="bubble-r">{this.props.message}</div></div>) }
}
