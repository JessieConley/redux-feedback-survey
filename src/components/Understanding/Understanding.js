import React, { Component } from "react";
import { connect } from "react-redux";
// import Axios from 'axios';

// import { HashRouter as Router, Route, Link } from "react-router-dom";

class Understanding extends Component {
  //Set initial state
  state = {
    understanding: "0"
  };

  //Update state to selected value
  handleChangeFor = (event, typeOfChange) => {
    console.log("logging from handleChangeFor", event.target.value);
    this.setState({
      understanding: event.target.value
    });
  };

  //Set up buttonClick function to takes user to the next route they want to go using this.props.history
  buttonClick = () => {
    if (this.state.understanding === "0") {
      alert("A selection is required to advance to the next question.");
      return;
    }
    this.props.dispatch({
      //Dispatch to reducer
      type: "UNDERSTAND_ANSWER",
      payload: this.state.understanding
    });
    console.log("logging payload from UNDERSTAND_ANSWER", this.state);

    this.props.history.push("/supported");
  };

  render() {
    return (
      <div className="understandingQuestion">
        <h1>How well are you understanding content?</h1>
        <p>Understanding?</p>

        <select
          id="understanding"
          name="understanding"
          onChange={this.handleChangeFor}
        >
          <option value="0">Choose</option>
          <option value="1">1 (I'm totally lost.)</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 (I've got this!)</option>
        </select>
        <br></br>
        <button onClick={this.buttonClick}>Next</button>
      </div>
    );
  }
}

export default connect()(Understanding);
