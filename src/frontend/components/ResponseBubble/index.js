import React, {Component} from 'react';

import './ResponseBubble.scss';

export default class ResponseBubble extends Component {
  render() { return(<div className="bubble-width"><div className="bubble-r">{this.props.message}</div></div>) }
}
