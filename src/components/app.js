import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import ChangeDate from './changeDate';
import LargeText from './largeText';
import moment from "moment";


export default class App extends Component {


  constructor(props) {
    super(props)

    this.state = {
      active: false,
      startDate: moment(),
    }
  }

  handleChange = function(date) {
    console.log('editing date for', date._d);
    
    this.setState({
        startDate: date
    });
}.bind(this)

    renderItems = function() {
      if(this.state.active) {
        return[
          <Clock/>,
          ChangeDate("Change Date", () => this.setState({active: false })),
          LargeText('04/03'),
          <label className="grid__remaining">Remaining until your 17th birthday</label>
        ]
      } else {
        return [
          <Picker callback={(date) => this.handleChange}/>,
          Button('Generate Countdown', () => this.setState({active: true }))
        ]
      }

    }.bind(this)

  render() {
    
    return (
      <div className="grid">
        <div className="grid__title">Birthday Countdown</div>

        <div className="grid__skew-dark-two"></div>
        <div className="grid__skew-dark-three"></div>

        <div className="grid__skew-light-one"></div>
        <div className="grid__skew-light-two"></div>
        <div className="grid__skew-light-box"></div>
      
        { this.renderItems() }
       
      </div>
      
    );
  }
}
