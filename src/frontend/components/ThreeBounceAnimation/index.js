import React, {Component} from 'react';
import ResponseBubble from '../ResponseBubble';
import QuestionBubble from '../QuestionBubble';
import axios from 'axios';

import './ThreeBounceAnimation.scss';

export default class ThreeBounceAnimation extends Component {

    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className='sk-three-bounce'>
          <div className="sk-child sk-bounce1"></div>
          <div className="sk-child sk-bounce2"></div>
          <div className="sk-child sk-bounce3"></div>
        </div>
      );
    }
}
