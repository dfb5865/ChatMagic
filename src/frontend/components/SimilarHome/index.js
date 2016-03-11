import React, {Component} from 'react';
import ResponseBubble from '../ResponseBubble';
import QuestionBubble from '../QuestionBubble';
import axios from 'axios';

import './SimilarHome.scss';

var initialState = {imageSrc : "http://carneyteam.com/wp-content/uploads/2014/07/selling-your-home-cedar-shingle-home11.jpg",
                    homeAddressLine1 : "4422 NE 65th St",
                    homeAddressLine2 : "Seattle, WA 98115",
                    bedroomCount : "1",
                    bathCount : "2",
                    sqft : "1,640",
                    price : "675,000",
                    similarHomeUrl : "http://www.zillow.com/homedetails/555-SE-Lewis-St-Issaquah-WA-98027/48873226_zpid/"};

export default class SimilarHome extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    render() {
      return (
        <div className='similar-home'>
          <div>
            <div className='similar-home-bubble-text similar-home-padded-div'>
              Thanks! A Premier Agent will contact you shortly.
            </div>
            <div className='similar-home-bubble-text similar-home-padded-div'>
              While you&#39;re waiting, here&#39;s a similar home you might like.
            </div>
          </div>

          <div className='similar-home-image-container'>
              <img src={this.state.imageSrc} className='similar-home-image'/>
          </div>

          <div className='similar-home-summary'>
            <a href={this.state.similarHomeUrl} className='similar-home-summary-link'>
              <div className='similar-home-summary-line1'>{this.state.homeAddressLine1}</div>
              <div className='similar-home-summary-line2'>{this.state.homeAddressLine2}</div>
            </a>

            <div className='similar-home-summary-text'>
              <div>
                {this.state.bedroomCount} beds
                <span className='middle-dot'>&#183;</span>
                {this.state.bathCount} baths
                <span className='middle-dot'>&#183;</span>
                {this.state.sqft} sqft
              </div>
              <div>
                ${this.state.price}
              </div>
            </div>
          </div>
        </div>
      );
    }
}
