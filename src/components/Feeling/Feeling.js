import React, { Component } from "react";
import { connect } from "react-redux";
// import Axios from 'axios';

// import { HashRouter as Router, Route, Link } from "react-router-dom";



class Feeling extends Component {
  state = {
    feeling: ""
  };

  handleChangeFor = (event, typeOfChange) => {
    console.log("logging from handleChangeFor", event.target.value);
    this.setState({
      feeling: event.target.value
    });
  };

  //Set up buttonClick function to takes user to the next route they want to go using this.props.history
  buttonClick = () => {
    this.props.dispatch({
      type: "ANSWER",
      payload: this.state.feeling
    });
    console.log("logging payload from ANSWER", this.state);

    this.props.history.push("/understanding");
  };

  render() {
    return (
      <div className="FeelingQuestion">
        <h1>How are you feeling today?</h1>
        <p>Feeling?</p>
       
          <select id="feeling" name="feeling" onChange={this.handleChangeFor}>
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


export default connect() (Feeling);