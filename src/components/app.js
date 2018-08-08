import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import ChangeDate from './changeDate';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

    renderItems = function() {
      if(this.state.active) {
        return[
          <Clock/>,
          ChangeDate("Change Date", () => this.setState({active: false }))
        ]
      } else {
        return Button('Generate Countdown', () => this.setState({active: true }))
      }

    }.bind(this)

  render() {
    
    //return <div className="grid"><Clock/></div>

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
        { this.renderItems() }
       
      </div>
      
    );
  }
}
