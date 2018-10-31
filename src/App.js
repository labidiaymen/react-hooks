import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';

function useFormInput(init_value) {
  const [value, setValue] = useState(init_value);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

function LoginForm() {
  const name = useFormInput('');
  const lastName = useFormInput('');
  return (
    <div>
      <div className="form-control">
        <TextField label="Name"   {...name} />
      </div>
      <div className="form-control">
        <TextField label="Lastname"  {...lastName} />
      </div>
      <div>
        {name.value}  {lastName.value}
      </div>
    </div>
  );
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="">
          <LoginForm />
        </header>
      </div>
    );
  }
}

export default App;
