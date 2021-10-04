import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/home";
import ApplyFormComponent from './components/pages/apply_form';
import AboutUsComponent from './components/pages/about_us';

export default class Routes extends Component {
  render (  ) {
    return(
     <Switch>
       <Route exact path="/" component = {Home}/>
       <Route path="/about_us" component = { AboutUsComponent }/>
       <Route path="/Apply" component = {ApplyFormComponent}/>
       <Route path="*" component={Home}/>
     </Switch>
    );
  }
}