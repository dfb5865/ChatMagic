import React, {Component} from 'react';
import ResponseBubble from '../ResponseBubble';
import QuestionBubble from '../QuestionBubble';
import axios from 'axios';

import './SimilarHome.scss';

export default class SimilarHome extends Component {

    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className='ask-for-name-and-number'>
          <div className='bubble-text div-with-bottom-border'>
            Here's a similar home while you wait.
          </div>
          <div className='div-with-bottom-border padded-div'>
            HOME
          </div>
          <div className='div-with-bottom-border padded-div'>
           HOME INFO
          </div>
        </div>
      );
    }
}
