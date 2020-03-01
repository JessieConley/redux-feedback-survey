import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

class Feeling extends Component {
  //Set initial state
  state = {
    feeling: '0'
  };
//Update state to selected value
  handleChangeFor = (event, typeOfChange) => {
    console.log("logging from handleChangeFor", event.target.value);
    this.setState({
      feeling: event.target.value
    });
  };

  //Set up buttonClick function to takes user to the next route they want to go using this.props.history
  buttonClick = () => {
    if(this.state.feeling==='0')
    {alert('A selection is required to advance to the next question.'); return};
    this.props.dispatch({
  //Dispatch to reducer
      type: "FEEL_ANSWER",
      payload: this.state.feeling
    });
    console.log("logging payload from FEEL_ANSWER", this.state);

    this.props.history.push("/understanding");
  };

  render() {
    return (
      <div className="FeelingQuestion">
        <h1>How are you feeling today?</h1>
        <p>Feeling?</p>
          <select required aria-required="true" id="feeling" name="feeling" onChange={this.handleChangeFor}>
            <option value="0">Choose</option>
            <option value="1">1 (I'm very stressed.)</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5 (I'm feeling great!)</option>
          </select>
          <br></br>
          <br></br>
          <Button size="small" variant="contained" color="primary" onClick={this.buttonClick}>Next</Button>
        
      </div>
    );
  }
}


export default connect() (Feeling);