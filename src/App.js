import React, { Component } from 'react';
import './App.css';

import SimpleForm from './components/SimpleForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            React Form Example
          </p>
        </header>
        <div className="Name-Form">
          <SimpleForm/>
        </div>
      </div>
    );
  }
}

export default App;
