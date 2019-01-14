import React from 'react';
import '../App.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      finishedValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({finishedValue: this.state.value});
    // alert('Submitted text: ' + this.state.value);
  }

  render() {
    return (
      <div>
        <form className="Horizontal-Form" onSubmit={this.handleSubmit}>
          <label className="Horizontal-Form">
            <div className="Name-Label">
            Enter Text Here:
            </div>
            <input className="Font-3vh" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input className="Font-2vh" type="submit" value="Submit" />
        </form>
        <h1>You entered: {this.state.finishedValue}</h1>
      </div>
    );
  }
}

export default NameForm;
