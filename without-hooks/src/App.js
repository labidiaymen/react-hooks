import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastName: '',
      pageTitle: 'React Hooks'
    };

  }
  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleLastNameChange(e) {
    this.setState({
      lastName: e.target.value
    })
  }

  handleTitleChange(e) {
    this.setState({
      pageTitle: e.target.value
    })
  }

  componentDidMount() {
    document.title = this.state.pageTitle;
  }

  componentDidUpdate() {
    document.title = this.state.pageTitle;
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

        <div className="form-control">
          <TextField label="Page Title" onChange={this.handleTitleChange.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
