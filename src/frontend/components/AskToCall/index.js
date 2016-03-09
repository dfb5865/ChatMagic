import React, {Component} from 'react';

import './AskToCall.scss';

export default class AskToCall extends Component {
  render() {
    return  (
      <div className='AskToCall'>
        <div>
          Excellent. We&#39;d love to give you a call to finalize some details.
          <br/>
          <br/>
          Would that be okay?
          <hr/>
        </div>
        <div>
          <div>
            <div>
              <a  onClick={this.handleYesClick.bind(this)} className='StyleAnchorTags'>Yes</a>
            </div>
            <div>
              <a  onClick={this.handleNoClick.bind(this)} className='StyleAnchorTags'>No</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({'requestToCall' : false});
  }

  handleYesClick (){
    this.setState({'requestToCall' : true});
    // console.log(this.state);
  }

  handleNoClick (){
    this.setState({'requestToCall' : false});
    // console.log(this.state);
  }

}
