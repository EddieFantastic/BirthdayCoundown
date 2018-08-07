import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';

export default class App extends Component {
  render() {
    return (
      <div className="grid">
        <div className="grid__title">Birthday Countdown</div>

        <div className="grid__skew-dark-box"></div>
        <div className="grid__skew-dark-two"></div>
        <div className="grid__skew-dark-three"></div>

        <div className="grid__skew-light-one"></div>
        <div className="grid__skew-light-two"></div>
        <div className="grid__skew-light-box"></div>
      
        <Picker/>
        { Button('Generate Countdown') }
      </div>
      
    );
  }
}
