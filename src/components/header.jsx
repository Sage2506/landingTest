
import React, { Component } from "react";
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default class Header extends Component {

  render (  ) {
    return (
      <div className="Navigation-bar section-gray">
        <ul>
          <li><img src={logo} alt="logo"></img></li>
          <li><a href="/">Companies</a></li>
          <li><a href="/">Team</a></li>
          <li><a href="/">Blog</a></li>
          <li><Link to="/about_us">Agency</Link></li>
          <li><a href="/">Contact Us</a></li>
          <li className="apply-link"><Link to="/Apply">Apply</Link></li>
        </ul>
      </div>
    );
  }
}




