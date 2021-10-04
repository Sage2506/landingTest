import React, { Component } from 'react';
import grayLogo from "../../assets/grayLogo.png";

export default class AboutUsComponent extends Component {
  render (  ) {
    return(
      <div>

      <div className="section-white">
        <div className="about-us-info">
          <div className="about-us-title">
            <h1>We really invest via the MLTPLY Memo</h1>
          </div>
          <div className="about-us-info-section">
            <div className="about-us-info-logo">
              <img src={grayLogo} alt="gray logo" />
            </div>
            <div className="about-us-info-text">
              <p>
                You shouldn't need a warm intro to access venture capital. Our Magma Memo
                democratizes access to venture capital and is the best way to get in touch with
                us. Don't spend more than 5-10 minutes on it. Bullet points are just fine.
                <br />
                <br />
                Your Magma Memo helps us be ready for a first meeting by getting to know you
                and your business so taht we can dig in during our first meeting.
              </p>
            </div>
          </div>
        </div>
        <div className="about-us-rows">
          <div className="about-us-row" >
            <div className="about-us-row-img">
              <div className="trapezoid">
              </div>
            </div>
            <div className="about-us-row-info">
              <div className="about-us-row-info-container">
                <div className="about-us-row-info-title">Top Teams</div>
                <div className="about-us-row-info-text">
                  We like to partner with entrepreneurs who have "founder market fit"
                  founders who have an unfair advantage. We want to understand
                  why you're the best team in the world to solve the problem you're
                  trying to solve.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-rows">
          <div className="about-us-row" >
            <div className="about-us-row-img">
              <div className="trapezoid">
              </div>
            </div>
            <div className="about-us-row-info">
              <div className="about-us-row-info-container">
                <div className="about-us-row-info-title">Top Teams</div>
                <div className="about-us-row-info-text">
                  We like to partner with entrepreneurs who have "founder market fit"
                  founders who have an unfair advantage. We want to understand
                  why you're the best team in the world to solve the problem you're
                  trying to solve.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-rows">
          <div className="about-us-row" >
            <div className="about-us-row-img">
              <div className="trapezoid">
              </div>
            </div>
            <div className="about-us-row-info">
              <div className="about-us-row-info-container">
                <div className="about-us-row-info-title">Top Teams</div>
                <div className="about-us-row-info-text">
                  We like to partner with entrepreneurs who have "founder market fit"
                  founders who have an unfair advantage. We want to understand
                  why you're the best team in the world to solve the problem you're
                  trying to solve.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-rows">
          <div className="about-us-row" >
            <div className="about-us-row-img">
              <div className="trapezoid">
              </div>
            </div>
            <div className="about-us-row-info">
              <div className="about-us-row-info-container">
                <div className="about-us-row-info-title">Top Teams</div>
                <div className="about-us-row-info-text">
                  We like to partner with entrepreneurs who have "founder market fit"
                  founders who have an unfair advantage. We want to understand
                  why you're the best team in the world to solve the problem you're
                  trying to solve.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>
    );
  }
}