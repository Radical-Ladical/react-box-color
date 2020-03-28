import React, {Component} from 'react';
import './components/change.js';
import './App.css';

export default class app extends Component {


  render() {
    return (
      <div onClick="Change('red','#FOF');"  id="red">
        wow
      </div>
    )
  }
}