import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastName: ''
    };

  }
  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleLastNameChange(e) {
    this.setState({
      lastNamen: e.target.value
    })
  }
  render() {

    return (
      <div>
        <div className="form-control">
          <TextField label="Name" onChange={this.handleNameChange.bind(this)} />
        </div>
        <div className="form-control">
          <TextField label="Lastname" onChange={this.handleLastNameChange.bind(this)} />
        </div>
        <div>
          {this.state.name}  {this.state.lastName}
        </div>
      </div>
    );
  }
}

export default App;
