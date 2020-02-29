import React, { Component } from "react";
// import { HashRouter as Router, Route, Link } from "react-router-dom";

class Comments extends Component {
  //Set up buttonClick function to takes user to the next route they want to go using this.props.history
  buttonClick = () => {
    this.props.history.push("/review");
  };
  render() {
    return (
      <div className="QuestionFour">
        <h1>Any comments you want to leave?</h1>
        <p>Comments</p>
        
        <input placeholder="comments"></input>

        <button onClick={this.buttonClick}>Next</button>
      </div>
    );
  }
}

export default Comments;
