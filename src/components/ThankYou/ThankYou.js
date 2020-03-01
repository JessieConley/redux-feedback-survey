import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Comments extends Component {
  //Set up buttonClick function to takes user to the next route they want to go using this.props.history
  buttonClick = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="QuestionFour">
        <h1>Thank You!</h1>
        <h2>Your feedback has been received.</h2>
       
        <Button size="large" variant="contained" color="primary" onClick={this.buttonClick}>Leave New Feedback</Button>
      </div>
    );
  }
}

export default Comments;
