import React, { Component } from "react";
import { connect } from "react-redux";


class Comments extends Component {
  state = {
    comments: ""
  };

  //Dispatch to
  handleChangeFor = (event, typeOfChange) => {
    console.log("logging from handleChangeFor", event.target.value);
    this.setState({
      comments: event.target.value
    });
  };

  //Set up buttonClick function to takes user to the next route they want to go using this.props.history
  buttonClick = () => {
    this.props.dispatch({
      type: "ANSWER",
      payload: this.state.comments
    });
    console.log("logging payload from ANSWER", this.state);

    this.props.history.push("/review");
  };

  render() {
    return (
      <div className="commentsInput">
        <h1>Any comments you want to leave?</h1>
        <p>Comments</p>

        <input placeholder="comments"></input>

        <button onClick={this.buttonClick}>Next</button>
      </div>
    );
  }
}

export default connect() (Comments);
