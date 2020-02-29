import React, { Component } from "react";
import { connect } from "react-redux";


class Supported extends Component {
  state = {
    supported: ""
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
    this.props.dispatch({
      type: "ANSWER",
      payload: this.state.supported
    });
    console.log("logging payload from ANSWER", this.state);

    this.props.history.push("/comments");
  };

  render() {
    return (
      <div className="supportedQuestion">
        <h1>How well are you being supported?</h1>
        <p>Support?</p>

        <select id="supported" name="supported" onChange={this.handleChangeFor}>
          <option value="1">1 (really bad)</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 (great)</option>
        </select>
        <button onClick={this.buttonClick}>Next</button>
      </div>
    );
  }
}

export default connect()(Supported);
