import React, { Component } from "react";
class Comments extends Component {
  //Set up buttonClick function to takes user to the next route they want to go using this.props.history
  buttonClick = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="QuestionFour">
        <h1>Thank You!</h1>
       
        <button onClick={this.buttonClick}>Leave New Feedback</button>
      </div>
    );
  }
}

export default Comments;
