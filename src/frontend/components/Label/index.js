import React, {Component} from 'react';

import './Label.scss';

export default class Label extends Component {

  render() {
    return (
      <div className='label'>
        {this.props.name}
      </div>
    );
  }
}
