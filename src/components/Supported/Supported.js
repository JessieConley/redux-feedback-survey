import React, { Component } from "react";
import { connect } from "react-redux";


class Supported extends Component {
  state = {
    supported: '0'
  };

  //Dispatch to
  handleChangeFor = (event, typeOfChange) => {
    console.log("logging from handleChangeFor", event.target.value);
    this.setState({
      supported: event.target.value
    });
  };

  //Set up buttonClick function to takes user to the next route they want to go using this.props.history
  buttonClick = () => {
    if(this.state.supported==='0')
    {alert('A selection is required to advance to the next question.'); return};
    this.props.dispatch({
      type: "SUPPORTED_ANSWER",
      payload: this.state.supported
    });
    console.log("logging payload from SUPPORTED_ANSWER", this.state);

    this.props.history.push("/comments");
  };

  render() {
    return (
      <div className="supportedQuestion">
        <h1>How well are you being supported?</h1>
        <p>Support?</p>

        <select id="supported" name="supported" onChange={this.handleChangeFor}>
          <option value="0">Choose</option>
          <option value="1">1 (I feel abandoned.)</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 (I feel supported!)</option>
        </select>
        <button onClick={this.buttonClick}>Next</button>
      </div>
    );
  }
}

export default connect()(Supported);
