import React, { Component } from "react";
// import { HashRouter as Router, Route, Link } from "react-router-dom";

class Supported extends Component {
  //Set up buttonClick function to takes user to the next route they want to go using this.props.history
  buttonClick = () => {
    this.props.history.push("/comments");
  };
  render() {
    return (
      <div className="QuestionThree">
        <h1>How well are you being supported?</h1>
        <p>Support?</p>
        <select>
          <option>1 (really bad)</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5 (great)</option>
        </select>

        <button onClick={this.buttonClick}>Next</button>
      </div>
    );
  }
}

export default Supported;
