import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class Review extends Component {

  postFeedback = (input) => {
    axios({
      method: 'POST',
      url: '/feedback',
      data: input
    }).then(response => {
      console.log(response.data);
    }).catch(error =>{
      console.log (error);
      alert('error with POST');
    });
    this.props.history.push("/");
    // this.props.dispatch({
    //   type: "RESET_TOTAL"
    // });
  }
  
  buttonClick = () => {


    this.props.history.push("/thank-you");
  };
  render() {
    return (
      <div className="Review">
        <h1>Review Your Feedback</h1>
        <p>Feelings: {this.props.reduxState.feelingReducer}</p>
        <p>Understanding: {this.props.reduxState.understandingReducer}</p>
        <p>Support: {this.props.reduxState.supportedReducer}</p>
        <p>Comments: {this.props.reduxState.commentsReducer}</p>
        <button onClick={this.buttonClick}>Submit</button>
      </div>
    );
  }
}

const putReduxStateOnProps = reduxState => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Review);
