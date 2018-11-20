import React, { Component, useState, useEffect } from 'react';
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
  const pageTitle = useFormInput('');

  useEffect(() => {
    document.title = pageTitle.value;
  });

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

      <div className="form-control">
        <TextField label="Page Title"  {...pageTitle} />
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
