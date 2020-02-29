import React, { Component } from "react";
// import { HashRouter as Router, Route, Link } from "react-router-dom";


class Understanding extends Component {
  buttonClick = () => {
    this.props.history.push("/supported");
  };
  render() {
    return (
      <div className="QuestionTwo">
        <h1>How well are you understanding the content?</h1>
        <p>Understanding?</p>
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

export default Understanding;
