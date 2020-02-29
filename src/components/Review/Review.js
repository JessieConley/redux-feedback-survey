import React, { Component } from "react";
// import { HashRouter as Router, Route, Link } from "react-router-dom";

class Review extends Component {
 
  render() {
    return (
      <div className="Review">
        <h1>Review Your Feedback</h1>
        <p>Feelings:</p>
        <p>Understanding:</p>
        <p>Support:</p>
        <p>Comments:</p>
        <button>Submit</button>
      </div>
    );
  }
}

export default Review;
