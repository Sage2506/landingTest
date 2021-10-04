import React, { Component } from 'react';
import bottomIcon from "../assets/bottomIcon.png";

export default class Footer extends Component {
  render (  ) {
    return(
     <div className="footer-section section-pink">
      <div className="foot-container section-gray" >
        <div className="foot-container-item text-gray">
          <ul>
            <li>Apply</li>
            <li>Portfolio</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className="foot-container-item text-gray">
          <ul>
            <li>Brave</li>
            <li>Crossing Borders</li>
            <li>LatamList Espresso</li>
            <li>Lorem ipsum</li>
            <li>Dolor sit amet</li>
            </ul>
        </div>
        <div className="foot-container-item-icon">
        <img src={bottomIcon} alt="bottomIcon" />
        </div>
      </div>
     </div>
    );
  }
}