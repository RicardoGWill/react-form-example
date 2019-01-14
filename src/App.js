import React, { Component } from 'react';
import './App.css';

import NameForm from './components/NameForm';

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
          <NameForm/>
        </div>
      </div>
    );
  }
}

export default App;
